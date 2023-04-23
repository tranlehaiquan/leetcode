import disjointInterval from ".";

describe('disjointInterval', () => {
  it('should return the length of the maximal set of mutually disjoint intervals', () => {
    expect(disjointInterval([[1, 2], [2, 10], [4, 6]])).toEqual(2);
    expect(disjointInterval([[1, 4], [2, 3], [4, 6], [8, 9]])).toEqual(3);
  });
});