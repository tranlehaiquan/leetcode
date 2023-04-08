import solution from '.';

describe("int to roman", () => {
  test("should return the roman numeral of the given integer", () => {
    const input = 3;
    const expected = "III";
    const actual = solution(input);
    expect(actual).toBe(expected);
  });

  test("should return the roman numeral of the given integer", () => {
    const input = 4;
    const expected = "IV";
    const actual = solution(input);
    expect(actual).toBe(expected);
  });

  test("should return the roman numeral of the given integer", () => {
    const input = 9;
    const expected = "IX";
    const actual = solution(input);
    expect(actual).toBe(expected);
  });

  test("should return the roman numeral of the given integer", () => {
    const input = 58;
    const expected = "LVIII";
    const actual = solution(input);
    expect(actual).toBe(expected);
  });

  test("should return the roman numeral of the given integer", () => {
    const input = 1994;
    const expected = "MCMXCIV";
    const actual = solution(input);
    expect(actual).toBe(expected);
  });
});