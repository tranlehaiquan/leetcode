import { maxProfit, maxProfitTwoPointer } from '.';

describe('Best Time to Buy and Sell Stock', () => {
  test('Example 1', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 5;
    expect(maxProfit(prices)).toBe(expected);
    expect(maxProfitTwoPointer(prices)).toBe(expected);
  });

  test('Example 2', () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    expect(maxProfit(prices)).toBe(expected);
    expect(maxProfitTwoPointer(prices)).toBe(expected);
  });

  test('Single day prices', () => {
    const prices = [5];
    const expected = 0;
    expect(maxProfit(prices)).toBe(expected);
    expect(maxProfitTwoPointer(prices)).toBe(expected);
  });

  // performance case
  test('Large input performance', () => {
    const prices = Array.from({ length: 100000 }, () =>
      Math.floor(Math.random() * 10000),
    );
    // Just ensure it runs without timing out (typical LeetCode constraint: ~1-2 seconds)
    const start = Date.now();
    const result1 = maxProfit(prices);
    const result2 = maxProfitTwoPointer(prices);
    const end = Date.now();
    expect(end - start).toBeLessThan(2000); // Should complete in under 2 seconds
    expect(result1).toBe(result2); // Both implementations should give same result
  });
});
