// distributeCandy
// N kids stand in a line, each having an integer rating. We distribute candies following:
// • Each kid gets at least 1 candy
// • Kids with higher ratings than their neighbours get more candies.
// Find the **minimum** candies required.

// Input: [1,3,7,1]
// Output: 7
// Explanation:
// Candies: [1,2,3,1]

const distribute = (ratings: number[]): number => {
  let candies: number[] = [];
  const keyValuePair = Object.entries(ratings).sort(
    (first, second) => first[1] - second[1],
  );

  for (let x = 0; x < keyValuePair.length; x++) {
    const [index, value] = keyValuePair[x];
    let candy = 1;

    // check right kid
    if (value > candies[Number(index) + 1]) {
      candy = Math.max(candy, candies[Number(index) + 1] + 1);
    }

    // check left kid
    if (value > candies[Number(index) - 1]) {
      candy = Math.max(candy, candies[Number(index) + -1] + 1);
    }

    candies[Number(index)] = candy;
  }
  return candies.reduce((acc, curr) => acc + curr, 0);
};

export default distribute;
