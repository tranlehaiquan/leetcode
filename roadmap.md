### Phase 1: The Foundations (1-2 Weeks)

Your goal here is to solidify the absolute basics. Don't skip this, even if it feels familiar.

1.  **Complexity Analysis (Big O Notation):**
    *   **What:** Understand `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)`, `O(2^n)`.
    *   **Why:** This is the language you'll use to describe the efficiency of every algorithm you write. You *will* be asked about it.
    *   **Action:** For every piece of code you write from now on, calculate its time and space complexity.

2.  **Core Data Structures:**
    *   **Arrays & Strings:** Master manipulation. Know their pros and cons (e.g., static size vs. dynamic, access time).
    *   **Linked Lists:** Singly, Doubly. Understand pointers and traversal.
    *   **Stacks & Queues:** LIFO and FIFO. Implement them using both arrays and linked lists.
    *   **Hash Tables (or Hash Maps):** This is arguably the most important data structure. Understand how they work (hashing functions, collision handling) and their `O(1)` average time complexity for lookups, insertions, and deletions.

### Phase 2: Core Algorithms & Non-Linear Data Structures (2-3 Weeks)

Now you'll tackle the most common interview topics.

1.  **Sorting and Searching:**
    *   **Algorithms:** Master **Binary Search**, **Merge Sort**, and **Quick Sort**. Understand their runtime and when to use them.
    *   **Practice:** Problems involving sorted arrays.

2.  **Trees:**
    *   **Concepts:** Understand tree terminology (node, root, leaf, height, depth).
    *   **Types:** Focus on **Binary Trees** and **Binary Search Trees (BSTs)**.
    *   **Traversals:** Master pre-order, in-order, post-order, and level-order traversals, both recursively and iteratively.

3.  **Graphs:**
    *   **Concepts:** Representations (Adjacency List vs. Adjacency Matrix).
    *   **Traversals:** **Breadth-First Search (BFS)** and **Depth-First Search (DFS)** are non-negotiable.
    *   **Practice:** Problems like "number of islands" or finding if a path exists.

4.  **Heaps (Priority Queues):**
    *   **Concept:** Understand how a heap keeps the min/max element at the top.
    *   **Use Cases:** Perfect for problems like "find the Kth largest element" or scheduling.

### Phase 3: Advanced Topics & Common Patterns (2-3 Weeks)

This is where you go from "knowing DSA" to "solving interview problems."

1.  **Algorithm Patterns:**
    *   **Two Pointers:** Incredibly common for array and string problems.
    *   **Sliding Window:** For finding optimal subarrays/substrings.
    *   **Backtracking:** For "find all possible solutions" problems (e.g., subsets, permutations).
    *   **Modified Binary Search:** For searching on a "monotonic" search space, not just a sorted array.

2.  **Dynamic Programming (DP):**
    *   **Concept:** Start with understanding memoization (top-down) and tabulation (bottom-up).
    *   **Practice:** Begin with classic problems like Fibonacci, climbing stairs, and coin change. The key is to identify overlapping subproblems.

3.  **Advanced Graph Algorithms (Optional but Recommended):
    *   **Dijkstra's Algorithm:** For shortest path in a weighted graph.
    *   **Topological Sort:** For ordering tasks with dependencies.

### Phase 4: Consistent Practice

*   **LeetCode:**
    *   Start with **Easy** questions to build confidence.
    *   Move to **Mediums**. This is the core of most interviews. Aim to solve 1-3 Mediums per day.
    *   Don't just look at the solution. Try to solve it for 30-45 minutes. If you're stuck, *then* look at the solution to understand the pattern. Re-solve the problem a day or two later.
*   **Mock Interviews:**
    *   Practice explaining your thought process out loud. The "why" behind your code is as important as the code itself.
