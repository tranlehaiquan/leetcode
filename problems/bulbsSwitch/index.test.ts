import { bulbsSwitch } from '.';

describe('bulbsSwitch', () => {
  it('should return the minimum number of switches to turn all the bulbs on', () => {
    const bulbs = [0, 1, 0, 1];
    const expected = 4;

    expect(bulbsSwitch(bulbs)).toEqual(expected);
  });

  it('should return the minimum number of switches to turn all the bulbs on', () => {
    const bulbs = [1, 1, 1, 1, 1];
    const expected = 0;

    expect(bulbsSwitch(bulbs)).toEqual(expected);
  });

  it('should return the minimum number of switches to turn all the bulbs on', () => {
    const bulbs = [0, 0, 0, 0, 0];
    const expected = 1;

    expect(bulbsSwitch(bulbs)).toEqual(expected);
  });
});
