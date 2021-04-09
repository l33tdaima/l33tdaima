# 17. Letter Combinations of a Phone Number (Medium)

Given a digit string, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

### Example 1:

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

### Example 2:

```
Input: digits = ""
Output: []
```

### Example 3:

```
Input: digits = "2"
Output: ["a","b","c"]
```

### Constraints:

- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

## Solution

### DFS Approach (Slow)

- Create a cartesian product helper to return the string list for two sets, each set is the mapping of a digit;
- For any digit string, recursively do cartesian product of first and the rest of string.

### BFS Approach (Fast)

- Create output FIFO queue, add an empty string initially;
- For each digit char in digits string
  - Pop a base string from queue as long as its length is i, i = 0..n, (why? otherwise the string in the queue is pushed for next level)
  - Push the concatenation of this string with mapped letter, e.g. 'a'+'d', 'a'+'e', 'a'+'f'
- Return output queue

#GOOGL #FB #AMZN #UBER #DBX

#String #Backtracking #Depth-first Search #Recursion
