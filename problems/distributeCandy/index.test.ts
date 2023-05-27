import distributeCandies from ".";

describe("Distribute candies", () => {
  // console.log(distribute([1,3,7,1]))
  it("should return 7", () => {
    expect(distributeCandies([1, 3, 7, 1])).toEqual(7);
  });
  // console.log(distribute([1, 2, 7, 4, 3, 1, 3]));
  it("should return 15", () => {
    expect(distributeCandies([1, 2, 7, 4, 3, 1, 3])).toEqual(15);
  });
});