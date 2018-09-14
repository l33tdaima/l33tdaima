# 291. Word Pattern II (Hard)

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

### Example 1:
```
Input: pattern = "abab", str = "redblueredblue"
Output: true
```

### Example 2:
```
Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
Output: true
```

### Example 3:
```
Input: pattern = "aabb", str = "xyzabcxzyabc"
Output: false
```

### Notes:
You may assume both pattern and str contains only lowercase letters.

## Solution
Clarification: `str` can repeat pattern again and again, but the repeation of pattern has to end exactly at the end of `str`.

Solve using backtracking. We just have to keep trying to use a character in the pattern to match different length of substrings in the input string, keep trying till we go through the input string and the pattern.

For example, input string is "redblueredblue", and the pattern is "abab", first let's use 'a' to match "r", 'b' to match "e", then we find that 'a' does not match "d", so we do backtracking, use 'b' to match "ed", so on and so forth ...

#DBX

#Backtracking

#Similar questions [#p290e](../p290e/README.md) [#291h](../291h/README.md)
