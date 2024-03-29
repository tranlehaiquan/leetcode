// Given a list of intervals: [s, el for meetings.
//   Find the least number of meeting rooms required.
//   • Constraints:
//   • 1 < N < 1e5
//   • 1 ≤ A[i] [0] < A[i] [1] < 1e9

// Input: [[5, 10], [15,20], [0,30]]
// Output: 2
// Explanation:
// [0,30] and [5, 10] take place simultaneously
// Same for [0,30] and [15, 20]

const meetingRoom = (intervals: number[][]): number => {
  const intervalsSorted = intervals.sort(
    (first, second) => first[0] - second[0]
  );
  const rooms = [];

  for (let x = 0; x < intervalsSorted.length; x++) {
    const interval = intervalsSorted[x];
    let found = false;
    let i = 0;
    // find room
    while (i < rooms.length && !found) {
      const room = rooms[i];
      // check if found
      if (room[1] <= interval[0]) {
        found = true;
        room[1] = interval[1];
      }
      i++;
    }

    if (!found) {
      rooms.push(interval);
    }
  }

  return rooms.length;
};

export const meetingRoom2 = (intervals: number[][]): number => {
  let max = 0;

  // [[5, 10], [15, 20]] -> {5: 1, 10: -1, 15: 1, 20: -2};
  const intervalByKey = intervals.reduce<Record<string, number>>(
    (acc, current) => {
      const [start, end] = current;

      acc[start] = (acc[start] || 0) + 1;
      acc[end] = (acc[end] || 0) - 1;

      return acc;
    },
    {}
  );

  const keysSorted = Object.keys(intervalByKey).sort(
    (a, b) => Number(a) - Number(b)
  );
    
  let currentRoom = 0;
  keysSorted.forEach((time) => {
    const numberOfRoom = intervalByKey[time];
    currentRoom += numberOfRoom;

    if (currentRoom > max) {
      max = currentRoom;
    }
  });

  return max;
};

export default meetingRoom;
