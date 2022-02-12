# 127. Word Ladder (Hard)

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

- Every adjacent pair of words differs by a single letter.
- Every `si` for `1 <= i <= k` is in `wordList`. Note that beginWord does not need to be in `wordList`.
- `sk == endWord`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.

### Example 1:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
```

### Example 2:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```

### Constraints:

- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
- `beginWord != endWord`
- All the strings in `wordList` are unique.

# Solution

- Store the wordList into a Set which serves as a visited record in tree.
- Do BFS from endWord which must be in the Set, otherwise return 0.
  - For each position of word, change one letter at a time
    - If it is in the Set, push a new created tree node into queue for further processing
    - If the beginWord has 1 char diff from the current node, return depth + 1.
- See examples below.

```
                    cog <- endWord 2
                   /   \
                  dog  log         3
                 /       \
                dot      lot       4
               /
    hit(5) -> hot                  5
```

```
      endWord ->    dog            2
                 /   |   \
               cog  log  dot       3
                     |    \
                    lot   hot<-hit 4
```

#FB #AMZN #LNKD #SNAP #YELP

#Breadth-first Search

#Similar questions [#126m](../p126m/README.md) [#127h](../p127h/README.md)
