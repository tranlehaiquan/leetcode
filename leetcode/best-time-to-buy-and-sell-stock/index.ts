// LeetCode Problem: best-time-to-buy-and-sell-stock
export function maxProfit(prices: number[]): number {
  let r = 0;
  // mono stack, increase
  const stack: number[] = [];

  for (let price of prices) {
    while (stack.length > 0 && stack[stack.length - 1] > price) {
      stack.pop();
    }

    if (stack.length) {
      r = Math.max(r, price - stack[0]);
    }

    stack.push(price);
  }

  return r;
}

export function maxProfitTwoPointer(prices: number[]): number {
  let l = 0,
    r = 1;
  let maxP = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
}
