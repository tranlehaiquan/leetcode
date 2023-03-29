import solution from ".";

describe("sumRecursion", () => {
  // test case 1
  it("should return 0", () => {
    const numbers: number[] = [];
    const result = solution(numbers);
    expect(result).toEqual(0);
  });

  // test case 2
  it("should return 1", () => {
    const numbers: number[] = [1];
    const result = solution(numbers);
    expect(result).toEqual(1);
  });
});
