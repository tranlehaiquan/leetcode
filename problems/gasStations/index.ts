// There are N gas stations along a circular route.
// Each has A[i] amount of gas.
// To travel from station i - i+1, there is B|i] cost.
// Find the earliest station from where you can travel around the entire circuit.
// Return -1 if not possible.
// • Constraints:
// • 1 <= N <= 16e

const gasStations = (gas: number[], cost: number[]): number => {
  let result = -1;
  let start = 0;

  const doubleGas = gas.concat(gas);
  const doubleCost = cost.concat(cost);

  let currentGas = 0;
  while (start < doubleGas.length && result === -1) {
    for (let x = start; x < doubleCost.length; x++) {
      // base case if this is a circle set result and end
      if (x - start === gas.length) {
        result = start;
        break;
      }

      const newGas = doubleGas[x];
      const newCost = doubleCost[x];

      if (currentGas + (newGas - newCost) < 0) {
        currentGas = 0;
        start = x + 1;
        break;
      } else {
        currentGas += newGas - newCost;
      }
    }
  }

  return result;
};

export default gasStations;
