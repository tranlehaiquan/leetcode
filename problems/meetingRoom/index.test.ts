import meetingRoom from ".";

describe("meetingRoom", () => {
  it("should return the least number of meeting rooms required", () => {
    expect(
      meetingRoom([
        [5, 10],
        [15, 20],
        [0, 30],
      ])
    ).toEqual(2);
    expect(
      meetingRoom([
        [1, 3],
        [2, 4],
        [4, 6],
        [3, 6],
        [5, 7],
        [6, 8],
        [2, 6],
      ])
    ).toEqual(4);
  });
});
