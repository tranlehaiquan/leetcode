import maximumNumber from ".";

describe("maximumNumber", () => {
  it("should return null", () => {
    const numbers: number[] = [];
    const result = maximumNumber(numbers);
    expect(result).toEqual(null);
  });

  it("should return 1", () => {
    const numbers: number[] = [1];
    const result = maximumNumber(numbers);
    expect(result).toEqual(1);
  });

  it("should return 3", () => {
    const numbers: number[] = [1, 2, 3];
    const result = maximumNumber(numbers);
    expect(result).toEqual(3);
  });
});