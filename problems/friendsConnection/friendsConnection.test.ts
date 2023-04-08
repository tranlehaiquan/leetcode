import solution from ".";

describe("Find friends closest degrees", () => {
  test("should return the number of degrees of separation between the two people", () => {
    const connections = [
      "Fred:Barney",
      "Barney:Betty",
      "Betty:BamBam",
      "BamBam:Pebbles",
      "Barney:Dino",
      "Dino:Wilma",
    ];
    const name1 = "Fred";
    const name2 = "Wilma";
    const expected = 3;
    const actual = solution(connections, name1, name2);
    expect(actual).toBe(expected);
  });

  test("should return the number of degrees of separation between the two people", () => {
    const connections = [
      "Fred:Barney",
      "Barney:Betty",
      "Betty:BamBam",
      "BamBam:Pebbles",
      "Barney:Dino",
      "Dino:Wilma",
    ];
    const name1 = "Fred";
    const name2 = "Betty";
    const expected = 2;
    const actual = solution(connections, name1, name2);
    expect(actual).toBe(expected);
  });

  test("should return -1 if can't find connect", () => {
    const connections = [
      "Fred:Barney",
      "Barney:Dino",
      "Dino:Wilma",
      "Test:Test2",
    ];
    const name1 = "Fred";
    const name2 = "Test";
    const expected = -1;
    const actual = solution(connections, name1, name2);
    expect(actual).toBe(expected);
  });
});
