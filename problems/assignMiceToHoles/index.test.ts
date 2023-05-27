import assignMiceToHoles from ".";

describe("Assign mice to holes", () => {
  it("should return 2", () => {
    expect(assignMiceToHoles([3, 2, -4], [0, -2, 4])).toBe(2);
  })

  it("should return 4", () => {
    expect(assignMiceToHoles([4, -4, 2], [4, 0, 5])).toBe(4);
  })
});