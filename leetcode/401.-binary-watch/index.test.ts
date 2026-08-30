import { readBinaryWatch } from './index';

describe('readBinaryWatch', () => {
  it('should return correct output for example 1', () => {
    const turnedOn = 1;
    const expected = [
      '0:01',
      '0:02',
      '0:04',
      '0:08',
      '0:16',
      '0:32',
      '1:00',
      '2:00',
      '4:00',
      '8:00',
    ];
    expect(readBinaryWatch(turnedOn)).toEqual(expected);
  });

  it('should return correct output for example 2', () => {
    const turnedOn = 9;
    expect(readBinaryWatch(turnedOn)).toEqual([]);
  });
});
