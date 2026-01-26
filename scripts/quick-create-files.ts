const PATH = {
  leetcode: 'leetcode/',
};

const createLeetCodeFile = async (name: string) => {
  let nameFormatted = name.toLowerCase().replace(/ /g, '-');
  console.log(`Creating LeetCode file for: ${nameFormatted}`);
  const folder = `${PATH.leetcode}/${nameFormatted}`;
  const path = `${folder}/index.ts`;
  const pathTest = `${folder}/index.test.ts`;
  const content = `// LeetCode Problem: ${name}\n\n`;
  await Bun.write(path, content);
  await Bun.write(pathTest, '');
};

const prompt = 'Enter LeetCode name: ';
process.stdout.write(prompt);

for await (const line of console) {
  await createLeetCodeFile(line.trim());
  break;
}
