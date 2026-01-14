import majorityElement from '.';

describe('majorityElement', () => {
  it('should return 2', () => {
    expect(majorityElement([1, 2, 2])).toBe(2);
    expect(majorityElement([3, 2, 2, 4, 2, 2])).toBe(2);
  });
});
