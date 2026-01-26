# 153. Find Minimum in Rotated Sorted Array

This function implements a modified binary search to find the minimum element in a rotated sorted array. It assumes the array was originally sorted in ascending order but rotated at an unknown pivot point.

## Algorithm Overview

- Initializes left and right pointers, and tracks the current minimum.
- In each iteration, calculates the midpoint and compares the leftmost and rightmost elements.
- If the left element is less than the right, the array is fully sorted, so the minimum is the left element (breaks early).
- Otherwise, updates the minimum with the midpoint value, then decides the search direction: if the midpoint is >= left, the minimum is in the right half (move left pointer); else, it's in the left half (move right pointer).
- Continues until the pointers meet, ensuring O(log n) time complexity.

## Edge Cases

Edge cases (e.g., no rotation, single element) are handled implicitly. This approach leverages the array's partial sorted property without linear scanning.
