# 91. Decode Ways (Medium)

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.

## Solution
We can either conduct DP left to right or right to left, the idea is the same, when adding a new character into consideration,
- If this new char is valid, [1-9], carry dp[i-1] to the current dp[i] to be solved;
- If the last two char is also valid, from 1 to 26, add dp[i-2] to current dp[i];
- If this new char is 0,
  - One digit check is invalid,
  - Two digit check is also invalid if not 10 or 20, dp[i] will be zero, eventually indicates 0 going forward.

To save more space, we can only keep the two numbers for current and previous states.

e.g.
From "XXX2" to "XXX23", dp("XXX23") = dp("XXX2")"3" + dp("XXX")"23"
From "XXX2" to "XXX28", dp("XXX28") = dp("XXX2")"8" + 0 as dp("XXX")"28" is invalid
When checking a candidate substring, any leading "0" is invalid.

#FB

#String #Dynamic Programming

#Similar questions [#091m](../p091m/README.md) [#639h](../p639h/README.md)
