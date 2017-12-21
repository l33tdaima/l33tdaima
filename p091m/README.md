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
If this new char is valid, [1-9], carry dp[i-1] to the current dp[i] to be solved;
If the last two char is also valid, from 1 to 26, add dp[i-2] to current dp[i].

e.g.
From "XXX2" to "XXX23", dp("XXX23") = dp("XXX2")"3" + dp("XXX")"23"
From "XXX2" to "XXX28", dp("XXX28") = dp("XXX2")"8" + 0 as dp("XXX")"28" is invalid
When checking a candidate substring, any leading "0" is invalid.

#String #Dynamic Programming
#FB
