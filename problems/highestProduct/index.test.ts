import hightestProduct from ".";

test("hightestProduct", () => {
  it("should return the highest product of 3 numbers", () => {
    expect(hightestProduct([1, 2, 3])).toEqual(6);
    expect(hightestProduct([1, 2, 3, 4])).toEqual(24);
    expect(hightestProduct([1, 2, 3, 4, 5])).toEqual(60);
    expect(hightestProduct([1, 2, 3, 4, 5, 6])).toEqual(120);
    expect(hightestProduct([1, 2, 3, 4, 5, 6, 7])).toEqual(210);
    expect(hightestProduct([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(336);
    expect(hightestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(504);
    expect(hightestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(720);
  });
});
