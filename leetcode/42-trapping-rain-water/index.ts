function trap(heights: number[]): number {
  if (!heights.length) return 0;
  let total = 0;
  const stack = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    if (!stack.length) {
      stack.push(height);
      continue;
    }

    let debt = 0;
    let count = 0;
    const min = Math.min(stack[0], height);
    while (height > stack[stack.length - 1]) {
      count += Math.max(min - stack[stack.length - 1], 0);
      stack.pop();
      debt++;
    }
    if (stack.length) {
      stack.push(...new Array(debt).fill(min));
    }
    stack.push(height);
    total += count;
  }

  return total;
}

export default trap;
