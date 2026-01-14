import moveSeats from '.';

describe('Move seats', () => {
  it('should return 2', () => {
    expect(moveSeats('..x..x.')).toEqual(2);
  });

  it('Should return 6', () => {
    expect(moveSeats('.x..x..xx.')).toEqual(6);
  });

  it('Should return 14', () => {
    expect(moveSeats('x.x.x..x.x.xx')).toEqual(14);
  });
});
