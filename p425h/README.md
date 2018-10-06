# 425. Word Squares (Hard)

Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.
```
b a l l
a r e a
l e a d
l a d y
```

### Note:
1. There are at least 1 and at most 1000 words.
2. All words will have the exact same length.
3. Word length is at least 1 and at most 5.
4. Each word contains only lowercase English alphabet a-z.

### Example 1:
```
Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
```

### Example 2:
```
Input:
["abat","baba","atan","atal"]

Output:
[
  [ "baba",
    "abat",
    "baba",
    "atan"
  ],
  [ "baba",
    "abat",
    "baba",
    "atal"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
```

## Solution
### Brutal Force Backtracking
In the recursive backtracking helper, try a word from words,
- If it will break the square invariant `wip[i][wip.size()] == w[i], i = [0..wip.size())`, skip it
- Otherwise add it into wip and call recursion

### Optimal Apporach
If we can build a trie which stores the words with the same prefix in this level, we can reduce the search space dramatically.
In each call stack, we only need to search the candidate words with the prefix of `wip[i][wip.size()], i = [0..wip.size())`.

#GOOGL #ORACLE

#Backtracking #Trie

#Similar questions [#422e](../p422e/README.md) [#425h](../p425h/README.md) [#766e](../p766e/README.md)
