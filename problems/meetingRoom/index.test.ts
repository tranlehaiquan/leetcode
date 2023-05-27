import meetingRoom, { meetingRoom2 } from ".";

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
    expect(
      meetingRoom2([
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

  it("should return 0", () => {
    expect(meetingRoom([])).toEqual(0);
    expect(meetingRoom2([])).toEqual(0);
  });

  it("should return 1", () => {
    expect(meetingRoom([[1, 2]])).toEqual(1);
    expect(meetingRoom2([[1, 2]])).toEqual(1);
  })
});
