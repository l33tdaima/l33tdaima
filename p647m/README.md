# 647. Palindromic Substrings (Medium)

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

### Example 1:
```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

### Example 2:
```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

### Note:
The input string length won't exceed 1000.

## Solution
Use center expansion approach to achieve a O(N^2) performance.
- For each character s[i] of the string, imagine two scenarios,
  - Do we have an odd length palindrome with s[i] as the center point, e.g. "aca";
  - Do we have an even length palindrome with s[i] and s[i+1] as the the center points, e.g. "abba";

There also exists an non-trivial O(N) algorithm called Manacher's Algorithm). Also see similar problemm #p005m longest palindromic substring 

#FB #LNKD

#String #Dynamic Programming
