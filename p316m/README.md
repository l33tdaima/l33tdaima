# 316. Remove Duplicate Letters (Medium)

Given a string `s`, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

### Example 1:

```
Input: s = "bcabc"
Output: "abc"
```

### Example 2:

```
Input: s = "cbacdcbc"
Output: "acdb"
```

### Constraints:

- `1 <= s.length <= 10^4`
- `s` consists of lowercase English letters.

**Note**: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

## Solution

- Scan `s` for a counter map of each character.
- Scan `s` again, decrement the counter for each char, stop until counter drops to zero. For the substring we scanned so far, we determine we will keep the smallest character `s[pos]`
- After determining the greedy choice s[i], we get a new string s’ from s by
  - removing all letters to the left of s[i],
  - removing all s[i]'s from s.
- We then recursively solve the problem w.r.t. s’.

The runtime is O(26 \* n) = O(n).

#GOOGL

#Stack #Greedy

#Similar questions [#316](../p316m/README.md) [#1081](../pr1081m/README.md)
