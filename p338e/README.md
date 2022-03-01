# Counting Bits (Easy)

Given an integer `n`, return an array ans of length `n + 1` such that for each `i` `(0 <= i <= n)`, `ans[i]` is the number of `1`'s in the binary representation of `i`.

### Example 1:

```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

### Example 2:

```
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

### Constraints:

- `0 <= n <= 10^5`

### Follow up:

- It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear time `O(n)` and possibly in a single pass?
- Can you do it without using any built-in function (i.e., like `__builtin_popcount` in C++)?

## Solution

| n   | binary | ans |
| --- | ------ | --- |
| 0   | 0000   | 0   |
| 1   | 0001   | 1   |
| 2   | 0010   | 1   |
| 3   | 0011   | 2   |
| 4   | 0100   | 1   |
| 5   | 0101   | 2   |
| 6   | 0110   | 2   |
| 7   | 0111   | 3   |
| 8   | 1000   | 1   |
| 9   | 1001   | 2   |

To achieve the O(n) complexity we need leverage the answer from previous number and look for the transition formula.

- For even number, LSB is 0, hence any even number's bit 1 count is the same as its half number, `>> 1`, i.e ans(8) = ans(4), ans(6) = (3)
- For odd number, LSB is 1, `>> 1` will lose one 1, we just need to add it back.

#Dynamic Programming #Bit Manipulation
