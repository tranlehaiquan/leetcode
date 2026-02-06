import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const BASE_DIR = process.cwd();
const TARGET_DIRS = ["leetcode", "problems"];
const OUTPUT_FILE = join(BASE_DIR, "dashboard/src/data/problems.json");

interface Problem {
  id: string;
  name: string;
  path: string;
  type: string;
  readme?: string;
  code?: string;
}

async function getProblems() {
  const problems: Problem[] = [];

  for (const dir of TARGET_DIRS) {
    const dirPath = join(BASE_DIR, dir);
    try {
      const entries = await readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          const problemPath = join(dirPath, entry.name);
          const problem: Problem = {
            id: `${dir}-${entry.name}`,
            name: entry.name.replace(/-/g, " "),
            path: relative(BASE_DIR, problemPath),
            type: dir,
          };

          // Try to read readme.md
          try {
            const readmePath = join(problemPath, "readme.md");
            problem.readme = await readFile(readmePath, "utf-8");
          } catch (e) {
            // No readme
          }

          // Try to read index.ts
          try {
            const indexPath = join(problemPath, "index.ts");
            problem.code = await readFile(indexPath, "utf-8");
          } catch (e) {
            // Maybe it's another file? Check for .ts files
            const files = await readdir(problemPath);
            const tsFile = files.find(f => f.endsWith(".ts") && !f.endsWith(".test.ts"));
            if (tsFile) {
                problem.code = await readFile(join(problemPath, tsFile), "utf-8");
            }
          }

          problems.push(problem);
        }
      }
    } catch (e) {
      console.warn(`Directory ${dir} not found or inaccessible`);
    }
  }

  return problems;
}

async function run() {
  console.log("Generating problem data...");
  const problems = await getProblems();
  await Bun.write(OUTPUT_FILE, JSON.stringify(problems, null, 2));
  console.log(`Generated data for ${problems.length} problems at ${OUTPUT_FILE}`);
}

run();
