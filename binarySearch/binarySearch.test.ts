import { binarySearch, binarySearchRecursion } from '.';

describe('binary search', () => {
  // test case 1
  test('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) should return 4', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
  });

  // test case 2
  test('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11) should return -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1);
  });

  // test case 3
  test('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0) should return -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toBe(-1);
  });

  // test case 4
  test('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1) should return 0', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0);
  });

  // test case 5
  test('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10) should return 9', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(9);
  });

  // test case 6
  test('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6) should return 5', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).toBe(5);
  });

  // test case 7 with string
  test("binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'f') should return 5", () => {
    expect(
      binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'f'),
    ).toBe(5);
  });

  // test fnc binarySearchRecursion
  test("binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'f') should return 5", () => {
    expect(
      binarySearchRecursion(
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        'f',
      ),
    ).toBe(5);
  });

  // test binarySearchRecursion
  test('binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6) should return 5', () => {
    expect(binarySearchRecursion([], 6)).toBe(-1);
  });

  test('binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11) should return -1', () => {
    expect(binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1);
  });
});
