# 140. Word Break II (Hard)

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

### Note:
The same word in the dictionary may be reused multiple times in the segmentation.

You may assume the dictionary does not contain duplicate words.

### Example 1:
```
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
```
### Example 2:
```
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
```

### Example 3:
```
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
```

## Solution
- Store the dictionary in hash table/set.
- Build up DP memorization which is an map of string list:
  - The key i is the length of substring, `[0..s.length]`,
  - The value is an array/list of sentences which is partial result for this particular substring.
- Everytime we add a char to the substring until the full length of input string:
  - Split the current working substring from index 0 to i - 1 to see if left side has result previously and right side in the dictionary, if yes append the new sentence.

#GOOGL #UBER #TWTR #DBX

#Dynamic Programming #Backtracking

#Similar questions [#139m](../p139m/README.md) [#140h](../p140h/README.md)
