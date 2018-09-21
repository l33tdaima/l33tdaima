# 616. Add Bold Tag in String (Medium)

Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.

### Example 1:
```
Input: 
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
``` 
### Example 2:
```
Input: 
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
```
### Note:
- The given dict won't contain duplicates, and its length won't exceed 100.
- All the strings in input have length in range [1, 1000].

## Solution, exactly the same with [#758e](../p758e/README.md)
- Build a mask array indicating if the char S[i] should be bold
- The mask[i] should be set when a word is found in S by trying every word (O(N * K)),  where K is the overall length of words
- Output the final string by inserting start and end tags into string
  - S[i] is the first bold letter if `mask[i] && (i == 0 || !mask[i-1])`
  - S[i] is the last bold letter if `mask[i] && (i == N-1 || !mask[i+1])`

#GOOGL

#String

#Similar questions [#616m](../p616m/README.md) [#758e](../p758e/README.md)
