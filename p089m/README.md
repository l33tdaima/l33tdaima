# 89. Gray Code (Medium)

An n-bit gray code sequence is a sequence of `2^n` integers where:

- Every integer is in the inclusive range `[0, 2^n - 1]`,
- The first integer is 0,
- An integer appears _no more than once_ in the sequence,
- The binary representation of every pair of _adjacent_ integers differs by _exactly one bit_, and
- The binary representation of the _first_ and _last_ integers differs by _exactly one bit_.

Given an integer `n`, return any valid _n-bit gray code sequence_.

### Example 1:

```
Input: n = 2
Output: [0,1,3,2]
Explanation:
The binary representation of [0,1,3,2] is [00,01,11,10].
- 00 and 01 differ by one bit
- 01 and 11 differ by one bit
- 11 and 10 differ by one bit
- 10 and 00 differ by one bit
[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
- 00 and 10 differ by one bit
- 10 and 11 differ by one bit
- 11 and 01 differ by one bit
- 01 and 00 differ by one bit
```

### Example 2:

```
Input: n = 1
Output: [0,1]
```

### Constraints:

- 1 <= n <= 16

## Solution

The grayCode(n) is grayCode(n - 1) by doubling the size, and the first half is `0 + grayCode(n-1)`, the second half is `1 + grayCode(n-1)`

```
0 000 - 0
0 001 - 1
0 011 - 3
0 010 - 2
0 110 - 6
0 111 - 7
0 101 - 5
0 100 - 4
1 100
1 101
1 111
1 110
1 010
1 011
1 001
1 000
```

#AMZN
#Back Tracking
