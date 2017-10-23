# 131. Palindrome Partition (Medium)

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]

## Solution:

Challenges are covering the cases reaching the end of string.
1. No palindrome found for this segment, e.g. "ab", returns [] and the outside recursion should NOT count this no solution case;
2. Exactly one palindrome found this segment, return [s] and stop any more recursion.

#Backtracking
