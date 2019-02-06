# 796. Rotate String (Easy)

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

### Example 1:
```
Input: A = 'abcde', B = 'cdeab'
Output: true
```

### Example 2:
```
Input: A = 'abcde', B = 'abced'
Output: false
```

### Note:
- A and B will have length at most 100.

## Solution
### O(N^2) Approach
If is answer is true, then B must be a substring of A + A.

### O(N) Apporach: Rolling Hash
When checking substring of A + A, compute a rolling hash.

### O(N) Apporach: KMP

#MSFT

