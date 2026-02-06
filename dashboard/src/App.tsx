import { useState, useMemo } from 'react'
import { Search, Code, FileText, ChevronRight, Github, Terminal } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import problemsData from './data/problems.json'
import { Playground } from './components/Playground'

interface Problem {
  id: string;
  name: string;
  path: string;
  type: string;
  readme?: string;
  code?: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(
    problemsData.length > 0 ? problemsData[0].id : null
  )
  const [view, setView] = useState<'docs' | 'code' | 'playground'>('code')

  const filteredProblems = useMemo(() => {
    return (problemsData as Problem[]).filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const selectedProblem = useMemo(() => {
    return (problemsData as Problem[]).find(p => p.id === selectedProblemId)
  }, [selectedProblemId])

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Sidebar */}
      <div className="w-80 border-r border-zinc-800 flex flex-col">
        <div className="p-4 border-b border-zinc-800">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Code className="text-blue-500" />
            LeetCode Explorer
          </h1>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search problems..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredProblems.map(problem => (
            <button
              key={problem.id}
              onClick={() => setSelectedProblemId(problem.id)}
              className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-colors ${
                selectedProblemId === problem.id 
                  ? 'bg-blue-600/10 text-blue-400 border-r-2 border-blue-500' 
                  : 'hover:bg-zinc-900 text-zinc-400'
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium truncate w-56 capitalize">
                  {problem.name}
                </span>
                <span className="text-xs opacity-50 uppercase tracking-wider mt-0.5">
                  {problem.type}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${
                selectedProblemId === problem.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'
              }`} />
            </button>
          ))}
          {filteredProblems.length === 0 && (
            <div className="p-8 text-center text-zinc-600">
              No problems found
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedProblem ? (
          <>
            <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold capitalize">{selectedProblem.name}</h2>
                <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                  <button
                    onClick={() => setView('code')}
                    className={`px-3 py-1 text-xs rounded-md transition-all flex items-center gap-2 ${
                      view === 'code' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    Code
                  </button>
                  <button
                    onClick={() => setView('docs')}
                    className={`px-3 py-1 text-xs rounded-md transition-all flex items-center gap-2 ${
                      view === 'docs' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    README
                  </button>
                  <button
                    onClick={() => setView('playground')}
                    className={`px-3 py-1 text-xs rounded-md transition-all flex items-center gap-2 ${
                      view === 'playground' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    Playground
                  </button>
                </div>
              </div>
              <a 
                href={`https://github.com/quantranlehai/leetcode/tree/main/${selectedProblem.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="flex-1 overflow-auto bg-zinc-950">
              {view === 'code' && (
                <div className="p-6">
                  <div className="rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
                    {selectedProblem.code ? (
                      <SyntaxHighlighter
                        language="typescript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '24px',
                          background: 'transparent',
                          fontSize: '14px',
                          lineHeight: '1.6',
                        }}
                      >
                        {selectedProblem.code}
                      </SyntaxHighlighter>
                    ) : (
                      <div className="p-12 text-center text-zinc-600 italic">
                        No code found for this problem
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {view === 'docs' && (
                <div className="p-6">
                  <div className="max-w-4xl mx-auto prose prose-invert prose-blue">
                    {selectedProblem.readme ? (
                      <ReactMarkdown>{selectedProblem.readme}</ReactMarkdown>
                    ) : (
                      <div className="p-12 text-center text-zinc-600 italic">
                        No README found for this problem
                      </div>
                    )}
                  </div>
                </div>
              )}

              {view === 'playground' && (
                <div className="h-full">
                    {selectedProblem.code ? (
                        <Playground code={selectedProblem.code} problemName={selectedProblem.name} />
                    ) : (
                        <div className="p-12 text-center text-zinc-600 italic">
                            No code to execute.
                        </div>
                    )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
              <Code className="w-10 h-10 opacity-20" />
            </div>
            <h2 className="text-xl font-medium text-zinc-400 mb-2">Select a problem</h2>
            <p className="max-w-xs">Choose a problem from the sidebar to view its implementation and documentation.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App