# 131. Palindrome Partition (Medium)

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

### Example 1:

```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

### Example 2:

```
Input: s = "a"
Output: [["a"]]
```

### Constraints:

- 1 <= s.length <= 16
- s contains only lowercase English letters.

## Solution:

Challenges are covering the cases reaching the end of string.

1. No palindrome found for this segment, e.g. "ab", returns [] and the outside recursion should NOT count this no solution case;
2. Exactly one palindrome found this segment, return [s] and stop any more recursion.

#Backtracking
