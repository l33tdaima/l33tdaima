# 820. Short Encoding of Words (Medium)

A _valid encoding_ of an array of words is any reference string `s` and array of indices `indices` such that:

- words.length == indices.length
- The reference string s ends with the '#' character.
- For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].

Given an array of `words`, return the _length of the shortest reference string_ `s` possible of any valid encoding of `words`.

### Example 1:

```
Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
```

### Example 2:

```
Input: words = ["t"]
Output: 2
Explanation: A valid encoding would be s = "t#" and indices = [0].
```

### Constraints:

- 1 <= words.length <= 2000
- 1 <= words[i].length <= 7
- words[i] consists of only lowercase letters.

## Solution

### Set

1. Build a set of words.
2. Iterate on all words and remove all suffixes of every word from the set.
3. Finally the set will the set of all encoding words.
4. Iterate on the set and return sum(word's length + 1 for every word in the set)

### Trie

1. Build a suffix trie by inserting all the words
2. While inserting words, store the trie nodes and the corresponding length + 1
3. Sum up only leave nodes
