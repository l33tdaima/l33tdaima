# 336. Palindrome Pairs (Hard)

Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words `words[i] + words[j]` is a palindrome.

### Example 1:

```
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
```

### Example 2:

```
Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]
```

### Example 3:

```
Input: words = ["a",""]
Output: [[0,1],[1,0]]
```

### Constraints:

- 1 <= words.length <= 5000
- 0 <= words[i].length <= 300
- words[i] consists of lower-case English letters.

## Solution

1. Build a reverse trie from words read from backward, i.e. "abcd" is stored as "dcba", and its original index
2. For each orginal word in the list, search for the following possible candidate which potentially becomes a palindrome pair,
   - Word s[0..k], where the substring s[k+1..] after k is a palindrome itself not including empty case, e.g.
     "abcd" pairs with "abc", cut into "abc" + "d"
     "sssll" pairs with "sss", cut into "sss" + "ll"
     "abceffe" pairs with "abc", cut into "abc" + "effe"
   - All words starting with s and the substring is a palindrome
     "s" pairs with "lls" and "abas"

#GOOGL #Airbnb

#String #Hash Table #Trie
