# 758. Bold Words in String (Easy) (Medium)

Given a set of keywords words and a string S, make all appearances of all keywords in S bold. Any letters between <b> and </b> tags become bold.

The returned string should use the least number of tags possible, and of course the tags should form a valid combination.

```
For example, given that words = ["ab", "bc"] and S = "aabcd", we should return "a<b>abc</b>d". Note that returning "a<b>a<b>b</b>c</b>d" would use more tags, so it is incorrect.
```

### Note:
- words has length in range [0, 50].
- words[i] has length in range [1, 10].
- S has length in range [0, 500].
- All characters in words[i] and S are lowercase letters.

## Solution
### Intuitive Apporach
- Build a lookup table from words (O(K) in time, where K is overall length of words, O(K) space)
- For each substring of S check if there is a match, if so add (start, end) index pair to an intermediate list, like (1, 's'), (2, 'e') O(N)
- The way to append is make sure the overlapped pairs are merged
- Output the final string by inserting start and end tags into string

### Optimal Approach
- Build a mask array indicating if the char S[i] should be bold
- The mask[i] should be set when a word is found in S by trying every word (O(N * K)),  where K is the overall length of words
- Output the final string by inserting start and end tags into string
  - S[i] is the first bold letter if `mask[i] && (i == 0 || !mask[i-1])`
  - S[i] is the last bold letter if `mask[i] && (i == N-1 || !mask[i+1])`

#GOOGL

#String

#Similar questions [#616m](../p616m/README.md) [#758e](../p758e/README.md)
