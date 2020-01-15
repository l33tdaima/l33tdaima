# 1143. Longest Common Subsequence (Medium)

Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

### Example 1:
```
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

### Example 2:
```
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

### Example 3:
```
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```

### Constraints:
1. 1 <= text1.length <= 1000
2. 1 <= text2.length <= 1000
3. The input strings consist of lowercase English characters only.

## Solution
### How to judge this is a DP problem
Three type of questions are what DP is suitable for, *est problem like longest, smallest, largest; number of all possible solutions; and whether.

### Dynamic Programming Approach
Use a 2-D array `len(text1) + 1 X len(text2) + 1`, dp[i][j] represent the answer the length fo LCS for text1[1..i] and text2[1..j], imaging text is indexed from 1. 

The base case is 0 since as long as one string is empty, the answer is 0.

The state transition is
- if text1[i] == text2[j], this character must be in the LCS, `dp[i][j] = dp[i-1][j-1] + 1`
- otherwise dp[i][j] is the max of dp[i-1][j], dp[i][j-1], and dp[i-1][j-1], where we can drop dp[i-1][j-1] which can never be greater than the other cases.

#Dynamic Programming
