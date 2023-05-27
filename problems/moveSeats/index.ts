// There is a row of empty (.) and filled(x) seats.
// Find the minimum number of moves required to make the people sit together.
// • Constraints
// • 1 < N < 1e6

import sumNumbers from "../../utils/sumNumbers";

// Example:
// Input: "..x..x."
// Output: 2
//
// Explanation:
// Either of the "×"s can move to the seat closest to the other one.
// "..xx..." OR "....xx."

const moveSeats = (seats: string): number => {
  const listSeat = seats.split("");
  const seatHavePeople = listSeat.reduce<number[]>((acc, curr, index) => {
    if (curr === "x") {
      acc.push(index);
    }
    return acc;
  }, []);

  // return 0 if no people
  if (!seatHavePeople.length) return 0;

  // move it to in a row
  const seatHavePeopleRow = seatHavePeople.map((item, index) => item - index);
  const pivot = seatHavePeopleRow[Math.floor(seatHavePeopleRow.length / 2)];

  let result;
  for (let x = pivot; x < seats.length; x++) {
    let total = 0;

    // loop to seatHavePeopleRow
    for (const seat of seatHavePeopleRow) {
      total += Math.abs(seat - x);
    }

    result = result ? Math.min(result, total) : total;
  }

  return result || 0;
};

export default moveSeats;
