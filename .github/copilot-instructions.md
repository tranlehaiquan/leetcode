# Copilot Instructions for Algorithm & Data Structure Repository

## Project Overview

This is a TypeScript-based repository for algorithmic problems, data structures, and interview preparation with a focus on LeetCode problems and algorithm implementations.

## Directory Structure & Conventions

### Core Organization

- `leetcode/`: LeetCode problems organized by number and name (e.g., `20-valid-parentheses/`)
- `problems/`: General algorithmic challenges and interview questions
- `data-structure/`: Core data structure implementations (binary trees, linked lists, etc.)
- `interview-tests/`: Company-specific interview problems (e.g., `nab/`)
- Root-level directories: Individual algorithm implementations (`binarySearch/`, `quickSort/`, etc.)

### File Patterns

Each algorithm/problem follows this structure:

```
algorithm-name/
├── index.ts          # Main implementation
└── algorithm.test.ts # Vitest test cases
```

**Key conventions:**

- Use descriptive function names with clear JSDoc comments
- Include problem URL/source as comment at top of file
- Export main function for easy importing in tests
- Use `describe()` and `it()` blocks for comprehensive test coverage

## Development Workflow

### Testing

- **Primary**: `pnpm test` (runs all Vitest tests)
- **Interactive**: `pnpm run test:ui` (opens Vitest UI)
- **Coverage**: `pnpm run coverage` (generates Istanbul coverage reports)
- **Turbo**: `pnpm run turbo:test` (uses Turbo for caching)

### Code Style

- TypeScript with ES2016 target and CommonJS modules
- Prettier configured for formatting
- Use type annotations for function parameters and return values
- Prefer explicit types over `any`

## Implementation Patterns

### Algorithm Structure

```typescript
// Include problem source/URL
export const functionName = (params: Type[]): ReturnType => {
  // Clear variable declarations
  // Step-by-step implementation with comments
  return result;
};
```

### Test Structure

```typescript
import { describe, it, expect } from "vitest";
import { functionName } from "./index";

describe("functionName", () => {
  it("should handle basic case", () => {
    expect(functionName(input)).toBe(expected);
  });
  // Multiple test cases covering edge cases
});
```

### Data Structures

- Use class-based implementations for complex structures
- Include helper methods as private when appropriate
- TreeNode pattern: `val`, `left`, `right` properties
- Bind methods in constructor for proper context

## Key Files to Reference

- `binarySearch/index.ts` - Clean algorithm implementation example
- `leetcode/20-valid-parentheses/` - Standard LeetCode problem structure
- `data-structure/binaryTree/index.ts` - Class-based data structure pattern
- `problems/majorityElement/` - Typical problem-solving approach
