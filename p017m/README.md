# 17. Letter Combinations of a Phone Number (Medium)

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

### Example
```
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

### Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

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

#String #Backtracking
