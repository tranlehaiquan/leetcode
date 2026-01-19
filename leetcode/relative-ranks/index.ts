import Heap from '../../heap/heap';

const FIRST = 'Gold Medal';
const SECOND = 'Silver Medal';
const THIRD = 'Bronze Medal';

export function findRelativeRanks(score: number[]): string[] {
  const listScore = [...score].sort((a, b) => b - a);
  const table: { [key: number]: string } = {};
  for (let i = 0; i < listScore.length; i++) {
    table[listScore[i]] = String(i + 1);

    if (i === 0) {
      table[listScore[i]] = FIRST;
    }
    if (i === 1) {
      table[listScore[i]] = SECOND;
    }
    if (i === 2) {
      table[listScore[i]] = THIRD;
    }
  }
  const result = [];

  for (let i = 0; i < score.length; i++) {
    result.push(table[score[i]]);
  }

  return result;
}

export const findRelativeRanks2 = (score: number[]): string[] => {
  const valueWithIndex = score.map((v, index) => ({ value: v, index }));
  const heap = new Heap(valueWithIndex, (a, b) => a.value > b.value);
  const result = [];
  let count = 0;
  while (heap.size) {
    const max = heap.extract();

    result[max.index] = String(count + 1);
    if (count === 0) {
      result[max.index] = FIRST;
    }
    if (count === 1) {
      result[max.index] = SECOND;
    }
    if (count === 2) {
      result[max.index] = THIRD;
    }

    count++;
  }

  return result;
};

console.log(findRelativeRanks2([10, 3, 8, 9, 4]));
