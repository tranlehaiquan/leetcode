function searchMatrix(matrix: number[][], target: number): boolean {
  const ROW = matrix[0].length;
  const COL = matrix.length;
  const length = ROW * COL;
  let l = 0;
  let r = length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    const col = Math.floor(mid / ROW);
    const row = mid % ROW;
    const midNum = matrix[col][row];

    if (midNum === target) {
      return true;
    }

    if (target > midNum) {
      l = mid + 1;
    }

    if (target < midNum) {
      r = mid - 1;
    }
  }

  return false;
}
export default searchMatrix;
