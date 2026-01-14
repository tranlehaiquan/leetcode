import selectionSort from '.';

describe('selectionSort', () => {
  it('should sort the items', () => {
    const items = [1, 5, 3, 2, 4];
    expect(selectionSort(items)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should sort the items 2', () => {
    const items = [5, 4, 3, 2, 1];
    expect(selectionSort(items)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should sort the items 3 large', () => {
    const items = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10];
    expect(selectionSort(items)).toEqual(items.sort((a, b) => b - a));
  });

  it('should sort the 40 random items', () => {
    // items random from 1 to 100
    const items = Array.from(
      { length: 40 },
      () => Math.floor(Math.random() * 100) + 1,
    );

    expect(selectionSort(items)).toEqual(items.sort((a, b) => b - a));
  });
});
