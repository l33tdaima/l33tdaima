# 91. Decode Ways (Medium)

A message containing letters from A-Z is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given a _non-empty_ message containing digits, determine the total number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

### Example 1:

```
Input: s = "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
```

### Example 2:

```
Input: s = "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

### Example 3:

```
Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
```

### Example 4:

```
Input: s = "1"
Output: 1
```

### Constraints:

- 1 <= s.length <= 100
- s contains only digits and may contain leading zero(s).

## Solution

We can either conduct DP left to right or right to left, the idea is the same, when adding a new character into consideration,

- If this new char is valid, [1-9], carry dp[i-1] to the current dp[i] to be solved;
- If the last two char is also valid, from 1 to 26, add dp[i-2] to current dp[i];

To save more space, we can only keep the two numbers for current and previous states.

e.g.
From "XXX2" to "XXX23", dp("XXX23") = dp("XXX2")"3" + dp("XXX")"23"
From "XXX2" to "XXX28", dp("XXX28") = dp("XXX2")"8" + 0 as dp("XXX")"28" is invalid
When checking a candidate substring, any leading "0" is invalid.

#FB

#String #Dynamic Programming

#Similar questions [#091m](../p091m/README.md) [#639h](../p639h/README.md)
