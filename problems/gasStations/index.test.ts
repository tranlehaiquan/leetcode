import gasStations from ".";

describe("gasStations", () => {
  it("should return 3", () => {
    expect(gasStations([3, 5, 2, 1, 7], [4, 2, 1, 9, 1])).toBe(4);
  });

  it("should return -1", () => {
    // [1, 2, 3, 4, 5]
    // [3, 4, 5, 1, 1]

    // [3] 4 - 1 = 3
    // [4] 3 + 5 - 1 = 7
    // [1] 7 + 1 - 3 = 5
    // [2] 5 + 2 - 4 = 3
    // [3] 3 + 4 - 1 = 6
    expect(gasStations([1, 2, 3, 4, 5], [3, 4, 5, 1, 1])).toBe(3);
  });
});
