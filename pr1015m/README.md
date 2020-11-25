# 1015. Smallest Integer Divisible by K (Medium)

Given a positive integer K, you need to find the length of the smallest positive integer N such that N is divisible by K, and N only contains the digit 1.

Return the length of N. If there is no such N, return -1.

Note: N may not fit in a 64-bit signed integer.

### Example 1:

```
Input: K = 1
Output: 1
Explanation: The smallest answer is N = 1, which has length 1.
```

### Example 2:

```
Input: K = 2
Output: -1
Explanation: There is no such positive integer N divisible by 2.
```

### Example 3:

```
Input: K = 3
Output: 3
Explanation: The smallest answer is N = 111, which has length 3.
```

### Constraints:

- 1 <= K <= 10^5

## Solution

For a given K, we evaluate 1 % K, 11 % K, 111 % K, ..., 11...1 % K, we have the answer once we see the remainder is zero. The number of those remainders will never exceed K.

The dividend numbers follows N' = 10 \* N + 1,

```
N = m * K + R
N' = 10 * (m * k + R) + 1
N' = 10 * m * K + 10 * R + 1
R' = 10 * R + 1
```

We just need to use this formula to find out the next mod K, as long as we find a duplicate of this mod K, we return -1.

#Math #Hash Table
