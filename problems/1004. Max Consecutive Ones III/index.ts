export function longestOnes(nums: number[], k: number): number {
  let longest = 0;
  let slots = [];
  let start;

  for (let x = 0; x < nums.length; x++) {
      const i = nums[x];

      if (i === 1 && start === undefined) {
          start = x;
      }

      if (i === 0) {
          const flipAble = slots.length < k;
          if (!flipAble && slots.length) {
              const firstSlot = slots.shift() as number;
              start = firstSlot + 1;
          }

          if(slots.length < k) {
              slots.push(x);
              if(start === undefined) {
                  start = x;
              }
          } else {
              start = undefined;
          }
      }

      if(start !== undefined) {
          const length = (x + 1) - start;
          longest = Math.max(longest, length);
      }
  }

  return longest;
};