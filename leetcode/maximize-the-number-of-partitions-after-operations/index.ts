// https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/?envType=daily-question&envId=2025-10-17
function maxPartitionsAfterOperations(s: string, k: number): number {
  let updateS = [...s];
  const letters = new Set(s.split(''));
  if (letters.size + 1 <= k) return 1;

  // start, end
  // Stop when:
  // canUpdate && k > start - end + 1
  //  update the last one

  let canUpdate = true;
  let left = 0;
  let right = k - 1;
  while (canUpdate) {
    const stbString = s.slice(left, right); // todo
    const lettersSub = new Set(stbString.split(''));
    console.log({
      left,
      right,
    });

    if (lettersSub.size < stbString.length) {
      // update current
      updateS[right] = String.fromCharCode(updateS[right].charCodeAt(0) + 1);
      canUpdate = false;
    } else {
      let next = updateS[right + 1];
      if (next === updateS[right]) {
        // update the next
        // todo handle edge aab -> abb
        updateS[right + 1] = String.fromCharCode(next.charCodeAt(0) + 1);
        canUpdate = false;
      }
    }
  }

  let result = 0;
  let list = new Set();
  for (let x = 0; x < updateS.length; x++) {
    if (!list.has(updateS[x])) {
      list.add(updateS[x]);
    }

    if (list.size === k) {
      result++;
      list.clear();
    }

    if (x === updateS.length - 1 && list.size > 0) {
      result++;
      list.clear();
    }
  }

  return result;
}

// abccab
// abc
// ...
