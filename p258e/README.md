# 258. Add Digits (Easy)

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

### Example:
```
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
```

### Follow up:
Could you do it without any loop/recursion in O(1) runtime?

## Solution
https://en.wikipedia.org/wiki/Digital_root

The O(1) formula is `dr(n) = 1 + ((n-1) mod 9)`.

#Math

#ADBE
