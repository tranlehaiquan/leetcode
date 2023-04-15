import solution from ".";

describe("CountCamera", () => {
  test("should return 3", () => {
    expect(solution(".>...")).toBe(3);
  });
  test("should return 4", () => {
    expect(solution(".>.<.>")).toBe(4);
  });
  test("should return 6", () => {
    expect(solution(">>>.<<<")).toBe(6);
  });
});