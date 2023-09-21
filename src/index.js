module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketPairs = Object.fromEntries(bracketsConfig);

  for (const char of str) {
    if (bracketPairs[char]) {
      // It's an opening bracket, push it onto the stack.
      stack.push(char);
    } else {
      // It's a closing bracket.
      if (stack.length === 0) {
        return false; // No corresponding opening bracket.
      }

      const top = stack.pop();
      if (bracketPairs[top] !== char) {
        return false; // Mismatched brackets.
      }
    }
  }

  return stack.length === 0; // Check if the stack is empty.
}
