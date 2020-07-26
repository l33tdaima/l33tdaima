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

Given n, we denote sum of digits of number n by `sum(n)`. Lemma: They have the same remainder if we divide them by 9.
Proof: let n = a_n ... a_2 a_1 a_0, then n - sum(n) = a_n* 99...9 + ... + a_2 * 99 + a_1*9 + 0, which is divisible by 9.

After round, the input number `n = 9*i + rem` becomes a smaller number `sum(n) = 9*j + rem`, eventually one digit which is `rem`. Hence this O(1) solution is `dr(n) = 1 + (n-1) % 9`.

#Math

#ADBE
