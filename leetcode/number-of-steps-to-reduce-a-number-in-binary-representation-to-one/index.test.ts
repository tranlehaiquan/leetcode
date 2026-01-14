import numSteps from '.';

describe('Number of Steps to Reduce a Number in Binary Representation to One', () => {
  it('1101', () => {
    expect(numSteps('1101')).toBe(6);
  });

  it('10', () => {
    expect(numSteps('10')).toBe(1);
  });

  it('1', () => {
    expect(numSteps('1')).toBe(0);
  });
});
