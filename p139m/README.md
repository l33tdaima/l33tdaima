# 139. Word Break (Medium)

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".

## Solution
Define dp[i], i in [0..s.length] as the truth value of s.substring can be segemented or not.

#Dynamic Programming
#FB
