// There are N mice and N holes. A mice takes 1 minute to travel 1 unit left or right.
// Find the minimum time after which all mice are in holes.
// •Constraints:
// • 1 < N < 1e5
// • - 1e9 < Alil < Blil < 1e9

const assignMiceToHoles = (
  mice: number[],
  holes: number[],
): number | undefined => {
  if (!mice.length) return;

  const miceSorted = mice.sort((a, b) => a - b);
  const holesSorted = holes.sort((a, b) => a - b);

  let maximum = 0;

  for (let x = 0; x < miceSorted.length; x++) {
    const steps = Math.abs(miceSorted[x] - holesSorted[x]);
    maximum = Math.max(steps, maximum);
  }

  return maximum;
};

export default assignMiceToHoles;
