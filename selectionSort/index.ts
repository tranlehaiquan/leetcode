const selectionSort = (items: number[]): number[] => {
  const result: number[] = [...items];

  for (let x = 0; x < result.length; x++) {
    for (let y = 0; y < result.length; y++) {
      if (result[x] < result[y]) {
        // switch x, y
        const temp = result[x];
        result[x] = result[y];
        result[y] = temp;
      }
    }
  }

  return result;
};

export default selectionSort;
