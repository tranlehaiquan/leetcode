// https://leetcode.com/problems/valid-parentheses/

const PAIR: { [key: string]: string } = {
  "(": ")",
  "[": "]",
  "{": "}",
};

export function isValid(s: string): boolean {
  let chain = "";

  for (let x = 0; x <= s.length; x++) {
    const letter: string = s[x];
    const isOpen = PAIR[letter];

    if (isOpen) {
      chain += isOpen;
      continue;
    }

    const isLastLetterInChain = chain[chain.length - 1] === letter;
    if (!isLastLetterInChain) return false;

    chain = chain.slice(0, chain.length - 1);
  }

  return true;
}

// ([])
// chain = )]
// ] -> check is last? Y -> remove
// ) -> check is last? Y -> remove

// (]
// chain = )
// ] check is last? N -> false

// Example 1:

// Input: s = "()"

isValid("()");

// Output: true

// Example 2:

// Input: s = "()[]{}"

isValid("()[]{}");

// Output: true

// Example 3:

// Input: s = "(]"

isValid("(]");

// Output: false

// Example 4:

// Input: s = "([])"

isValid("([])");

// Output: true