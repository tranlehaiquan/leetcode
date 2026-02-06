import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, AlertTriangle, Terminal } from 'lucide-react';
import * as Babel from '@babel/standalone';

interface PlaygroundProps {
  code: string;
  problemName: string;
}

export function Playground({ code, problemName }: PlaygroundProps) {
  const [inputArgs, setInputArgs] = useState('[]');
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  // Reset state when problem changes
  useEffect(() => {
    setLogs([]);
    setResult(null);
    setError(null);
    setInputArgs('[]');
  }, [code]);

  const handleRun = async () => {
    setIsRunning(true);
    setError(null);
    setLogs([]);
    setResult(null);

    try {
      // 1. Check for imports
      if (code.includes('import ')) {
        throw new Error('Running code with external imports is not supported in the playground yet.');
      }

      // 2. Transpile TS -> JS
      const transformResult = Babel.transform(code, {
        presets: ['typescript', 'env'],
        filename: 'solution.ts',
      });

      if (!transformResult.code) {
        throw new Error('Failed to transpile code.');
      }

      // 3. Prepare Execution Context
      let transpiledCode = transformResult.code;

      // Strip exports to make it a local variable/function
      transpiledCode = transpiledCode.replace(/export default/g, '');
      transpiledCode = transpiledCode.replace(/export /g, '');

      // 4. Capture Console
      const capturedLogs: string[] = [];
      const mockConsole = {
        log: (...args: any[]) => {
          capturedLogs.push(args.map(a => JSON.stringify(a)).join(' '));
          setLogs([...capturedLogs]);
        },
        warn: (...args: any[]) => {
            capturedLogs.push('[WARN] ' + args.map(a => JSON.stringify(a)).join(' '));
            setLogs([...capturedLogs]);
        },
        error: (...args: any[]) => {
            capturedLogs.push('[ERROR] ' + args.map(a => JSON.stringify(a)).join(' '));
            setLogs([...capturedLogs]);
        }
      };

      // 5. Parse Arguments
      let args;
      try {
        args = JSON.parse(inputArgs);
        if (!Array.isArray(args)) {
            throw new Error("Arguments must be a JSON array, e.g. [1, 2] or [[1,2], 3]");
        }
      } catch (e) {
        throw new Error('Invalid JSON arguments. Please provide an array of arguments, e.g., [1, "test"]');
      }

      // 6. Execute
      // We wrap the code to return the main function or logic
      // We assume the code defines a function. We need to find the function name or execute the last defined function?
      // Heuristic: The transpiled code will define functions. We need to invoke the one that matches the problem or the *default* one.
      // Since we stripped 'export default', the function is likely named or anonymous.
      // If it was `export default function foo()`, it became `function foo()`.
      // If it was `const foo = () => {} export default foo`, it became `const foo ...; foo`.

      // Let's wrap execution in a new Function
      const runUserCode = new Function('console', `
        ${transpiledCode}
        // Find the last defined function or return the result of the last expression
        // This is tricky. Let's try to return the function if it's defined.
        
        // Return all keys in scope that are functions?
        // Better: Expect the user to define a function.
        // We can try to identify the function name from the source code before transpilation?
        
        // Simple hack: We return the last defined variable that is a function
        // or just execute and hope the code returns something?
        // Usually leetcode solutions are a function definition.
        
        // Let's look for function names in the scope.
        const keys = Object.keys({ ...this }).filter(k => typeof this[k] === 'function');
        // This 'this' might be window or empty.
        
        return { ...this }; 
      `);
      
      // The `new Function` runs in global scope usually, unless restricted. 
      // We can't easily get local variables out unless we eval.
      
      // Alternative: Append "return [functionName]" to the code.
      // We need to find the function name.
      
      // Regex to find function name in ORIGINAL TS code
      const defaultExportMatch = code.match(/export\s+default\s+(?:function\s+)?([a-zA-Z0-9_]+)/);
      const constExportMatch = code.match(/export\s+const\s+([a-zA-Z0-9_]+)/);
      const functionExportMatch = code.match(/export\s+function\s+([a-zA-Z0-9_]+)/);
      
      let entryPointName = '';
      if (defaultExportMatch) entryPointName = defaultExportMatch[1];
      else if (constExportMatch) entryPointName = constExportMatch[1];
      else if (functionExportMatch) entryPointName = functionExportMatch[1];

      if (!entryPointName) {
         // Maybe it's `export default function() {...}` (anonymous)
         // In that case, after strip, it is `function() {...}` which is a syntax error if statement?
         // No, `export default function() {}` -> `function() {}` is invalid as statement.
         // It typically becomes `function _default() {}` in Babel?
         // Actually, let's look at the transpiled code.
         // Babel usually handles default export by assigning to `exports.default`.
         // But we are using 'env' preset without modules maybe?
         // Let's use a simpler transform that keeps it as a variable.
      }

      // Safe Eval Approach with explicit return
      // We create a function body that returns the main function.
      
      // Let's use a smarter regex to find the name *or* just use `eval` and see what happens.
      // Actually, if we use `Babel.transform(..., { presets: ['env'], plugins: ['transform-modules-commonjs'] })`, 
      // it will produce `exports.default = ...` or `exports.foo = ...`.
      // We can mock `exports`.
      
      const mockExports: any = {};
      const mockModule = { exports: mockExports };
      
      const runWithExports = new Function('module', 'exports', 'console', transpiledCode);
      runWithExports(mockModule, mockExports, mockConsole);
      
      // Now find the entry function
      let mainFn = mockExports.default || mockModule.exports.default;
      
      if (!mainFn) {
          // Try finding the first named export
          const keys = Object.keys(mockExports);
          if (keys.length > 0) mainFn = mockExports[keys[0]];
      }
      
      if (typeof mainFn !== 'function') {
          // Maybe the code just runs and doesn't export?
          // If the user's code was just script, it ran.
          // But for LeetCode, it's always a function.
          if (!mainFn && Object.keys(mockExports).length === 0) {
             throw new Error("Could not find an exported function. Ensure you use 'export default' or 'export function'.");
          }
          throw new Error("The exported entry is not a function.");
      }
      
      // Execute the function with args
      const resultVal = mainFn(...args);
      setResult(JSON.stringify(resultVal, null, 2));

    } catch (err: any) {
      setError(err.message || 'Unknown error');
      console.error(err);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 p-6 gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Terminal className="text-green-500" />
          Playground
        </h2>
        <div className="text-xs text-zinc-500">
            Supports standard JS/TS. Imports not supported.
        </div>
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">
          Function Arguments (JSON Array)
        </label>
        <div className="relative">
            <input
            type="text"
            value={inputArgs}
            onChange={(e) => setInputArgs(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm font-mono text-zinc-200 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="[1, 2, 3] or [[1,2], 3]"
            />
        </div>
        <p className="text-xs text-zinc-600">
          Enter arguments as a JSON array. E.g., for <code>add(a, b)</code>, enter <code>[1, 2]</code>.
        </p>
      </div>

      {/* Actions */}
      <div>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
            isRunning
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-green-500/20'
          }`}
        >
          {isRunning ? <RotateCcw className="animate-spin w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          Run Code
        </button>
      </div>

      {/* Output Section */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Console Logs */}
        <div className="flex flex-col bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400">
                Console Output
            </div>
            <div className="flex-1 p-4 overflow-auto font-mono text-xs text-zinc-300 space-y-1">
                {logs.length === 0 ? (
                    <span className="text-zinc-600 italic">No logs...</span>
                ) : (
                    logs.map((log, i) => (
                        <div key={i} className="border-b border-zinc-800/50 last:border-0 pb-1">
                            {log}
                        </div>
                    ))
                )}
            </div>
        </div>

        {/* Return Value */}
        <div className="flex flex-col bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400">
                Result
            </div>
            <div className="flex-1 p-4 overflow-auto">
                {error ? (
                    <div className="text-red-400 text-sm flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <pre className="whitespace-pre-wrap font-mono text-xs">{error}</pre>
                    </div>
                ) : result ? (
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</pre>
                ) : (
                    <span className="text-zinc-600 italic text-sm">Run to see result...</span>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
