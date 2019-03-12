# 459. Repeated Substring Pattern (Easy)

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

### Example 1:
```
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
```
### Example 2:
```
Input: "aba"
Output: False
```
### Example 3:
```
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
```

## Solution
### Cheating by RegEx
`/(.+)\\1+/`

### Intuitive Approach
For substring of length 1, 2, ..., len/2, come up with the candidate string by repeating, then compare it with the original string. O(n^2)

### Optimal Approach
- Doubling the string then trim off the first char and the last char.
- If there is no pattern, both of the first copy and the second copy will be changed, so str will not be found in it.
- If there is a pattern, the first char of str can still be found in the next pattern in first half, and the last char of str can also be found in the second half. 

Here is an example: abcabc is the original string, and (bcabc abcab) includes abcabc.

```cpp
    return (str + str).substr(1, str.size() * 2 - 2).find(str) != string::npos;
```

#GOOGL

#String

#Similar questions [#028](../p028e/README.md) [#459](../p459e/README.md) [#686](../p686e/README.md)
