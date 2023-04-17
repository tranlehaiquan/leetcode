// In order to finish a game, a player has to complete N missions.
// The missions are numbered from 0 to N-1. The K-th mission has an integer D[K] assigned, representing its difficulty level.
// During a day, you can perform any number of missions given the two following rules:
// • missions should be performed in the specified order, in other words,
//   a mission can be undertaken only if all of the missions preceding it have already been completed;
// • the difference between the difficulty levels of any two missions performed
//   on the same day should not be greater than an integer X.
// Write a function:
// class Solution { public int solution(int(J D, int X); )
// that, given an array D of N integers and an integer X,
// returns the minimum number of days required to complete all of the missions in the game.
// Examples:
// 1. Given D = [5, 8, 2, 7] and X = 3, your function should return 3. The first two missions can be
// performed on the first day, the third mission on the second day and the last mission on the third day.
// It is not possible to complete all of the missions in fewer days.
// 2. Given D = [2, 5, 9, 2, 1, 4] and X = 4, your function should return 3. The first two missions can be
// performed on the first day, the third mission on the second day and all of the remaining missions on the third day. Note that it is possible to perform the first mission on the first day and the next two missions on the second day. In both of these cases, the minimum number of days required to complete all of the missions is 3.
// 3. Given D = [1, 12, 10, 4, 5, 2] and X = 2, your function should return 4. The first mission can be
// performed on the first day, the next two missions on the second day, the fourth and fifth missions on the third day, and the last remaining mission on the fourth day. It is not possible to complete all of the missions in fewer days.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..200,000);
// X is an integer within the range [0.. 1,000,000,000];
// each element of array D is an integer within the range [1.. 1,000,000,000].

const solution = (D: number[], X: number): number => {
  let result = 1;
  // previous using to store min, max
  let previous: number[] = [];

  for (const quest of D) {
    const min = Math.min(...previous, quest);
    const max = Math.max(...previous, quest);
    const diff = Math.abs(max - min);

    if (diff > X) {
      result += 1;
      previous = [quest];
    } else {
      previous = [min, max];
    }
  }

  return result;
};

export default solution;