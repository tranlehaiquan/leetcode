import solution from '.';

describe('squareBox', () => {
  // test case 1
  it('should return 1', () => {
    const farm = [1, 1];
    const result = solution(farm);
    expect(result).toEqual(1);
  });

  // test case 2
  it('should return 2', () => {
    const farm = [2, 2];
    const result = solution(farm);
    expect(result).toEqual(2);
  });

  // test case 3
  it('should return 2', () => {
    const farm = [2, 4];
    const result = solution(farm);
    expect(result).toEqual(2);
  });

  // test case 4
  it('should return 80', () => {
    const farm = [1680, 640];
    const result = solution(farm);
    expect(result).toEqual(80);
  });
});
