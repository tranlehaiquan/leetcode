import { findRelativeRanks, findRelativeRanks2 } from '.';

describe('findRelativeRanks', () => {
  test('case 1', () => {
    const score = [5, 4, 3, 2, 1];
    const expected = ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'];
    expect(findRelativeRanks(score)).toEqual(expected);
    expect(findRelativeRanks2(score)).toEqual(expected);
  });

  test('case 2', () => {
    const score = [10, 3, 8, 9, 4];
    const expected = ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'];
    expect(findRelativeRanks(score)).toEqual(expected);
    expect(findRelativeRanks2(score)).toEqual(expected);
  });

  test('case 3', () => {
    const score = [1, 2, 3, 4, 5, 6];
    const expected = [
      '6',
      '5',
      '4',
      'Bronze Medal',
      'Silver Medal',
      'Gold Medal',
    ];
    expect(findRelativeRanks(score)).toEqual(expected);
    expect(findRelativeRanks2(score)).toEqual(expected);
  });
});
