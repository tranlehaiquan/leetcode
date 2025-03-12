import { describe, it, expect } from 'vitest';
import { moveZeroes } from '.';

describe('test moveZeroes', () => {
  it('[0, 1, 0, 3, 12] should return [1, 3, 12, 0, 0]', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
});