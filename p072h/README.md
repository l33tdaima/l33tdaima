# Edit Distance (Hard)

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

1. Insert a character
2. Delete a character
3. Replace a character

### Example 1:
```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

### Example 2:
```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

## Solution
Seeing this kind of minimization problem involving string, typically a DP problem. Two input strings indicates the state could be a 2-dimensional matrix.

Define state `dp[i][j] ` as the minimal edits for substring `word1[:i]` and `word2[:j]`. The state transition is
```
dp[i][j] = min(insert, remove, replace)
where
insert = dp[i-1][j] + 1
remove = dp[i][j-1] + 1
replace = dp[i-1][j-1] + 1 if char is not same, otherwise dp[i-1][j-1]

```

#String #Dynamic Programming

#Similar questions [#72](../p072h/README.md)
