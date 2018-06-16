#44. Wildcard Matching (Hard)

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

### Note:
- s could be empty and contains only lowercase letters a-z.
- p could be empty and contains only lowercase letters a-z, and characters like ? or *.

### Example 1:
```
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```
### Example 2:
```
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
```
### Example 3:
```
Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
```
### Example 4:
```
Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
```
### Example 5:
```
Input:
s = "acdcb"
p = "a*c?b"
Output: false
```

## Solution
### Assumption
There is no * in s.

### Intuitive Recursive Approach
Start from the back of s and p,
- If `*s == *p || *p == '?'`, the answer depends on the s[:-1] and p[:-1]
- If `*p == '*'`, the answer depends on s[:-1] and p (* matches any one char) or s and p[:-1] (* matches 0 char)

### DP Approach
We define the DP state `dp[i][j]` to be whether s[0..i) matches p[0..j), `dp[0][0]` is the case both are empty. Transitions are
```
DP[i][j] = DP[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '?'), if p[j - 1] != '*';
DP[i][j] = DP[i][j - 1] || DP[i - 1][j], if p[j - 1] == '*'.
```

### Iterative Approach
For each element in s
- If `*s==*p or *p == ?` goes to next element s++ p++
- If `p=='*'`, this is also a match, but one or many chars may be available, so let us save this *'s position and the matched s position.
- If not match, then we check if there is a * previously showed up,
  - If there is no *,  return false;
  - If there is an *,  we set current p to the next element of *, and set current s to the next saved s position.
```
abed
?b*d**

a=?, go on, b=b, go on,
e=*, save * position star=3, save s position ss = 3, p++
e!=d,  check if there was a *, yes, ss++, s=ss; p=star+1
d=d, go on, meet the end.
check the rest element in p, if all are *, true, else false;
```

#GOOGL #FB #TWTR #SNAP #TwoSigma

#String #Dynamic Programming #Backtracking #Greedy