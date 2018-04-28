# 139. Word Break (Medium)

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

### Example 1:
- Input: s = "leetcode", wordDict = ["leet", "code"]
- Output: true
- Explanation: Return true because "leetcode" can be segmented as "leet code".

### Example 2:
- Input: s = "applepenapple", wordDict = ["apple", "pen"]
- Output: true
- Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".

Note that you are allowed to reuse a dictionary word.

### Example 3:
- Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
- Output: false

## Solution
- Store the dictionary in hash table/set.
- Define `dp[i], i in [0..s.length]` as the truth value of `s.substring(i)` can be segmented or not.
- Transition formula of DP is to loop the current working substring with a split point, to check if two parts are both segmented, i.e. the first half DP true and the second half in hash table.

#GOOGL #FB #AMZN #BBG #UBER #YHOO #Pocket Gems #Square #Coupang

#Dynamic Programming #Hash Table

#Similar questions [#139m](../p139m/README.md) [#140h](../p140h/README.md)
