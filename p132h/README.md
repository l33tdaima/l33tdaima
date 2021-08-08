# 132. Palindrome Partitioning II (Hard)

Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of `s`.

### Example 1:

```
Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
```

### Example 2:

```
Input: s = "a"
Output: 0
```

### Example 3:

```
Input: s = "ab"
Output: 1
```

### Constraints:

- 1 <= s.length <= 2000
- s consists of lower-case English letters only.

## Solution (from tqlong, idea is too great to miss)

This DP algorithm utilizes the symmetry property of palindrome.

Say that it started at s[i] = 'b', and s[i-1,i+1] is a palindrome "aba" (odd length palindrome case):
.......aba...
|<-X->| ^
|<---Y-->|
And we know the least cuts for s[0,i-1) is X, then the least cuts for s[0,i+1] Y is not greater than X+1.

.......bb... (even length palindrome case)
|<-X->|^
|<--Y-->|
Last, we need to find out all the palindromes in s[0,i+1] so as to minimize the number of cuts.

#Dynamic Programming
