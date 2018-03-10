# 336. Palindrome Pairs (Hard)

Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]

Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]

## Solution
A valid assumption that words are case insenstive, we can just assume they are all lower case,
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
