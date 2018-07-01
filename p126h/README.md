# 126. Word Ladder II (Hard)

Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

### Note:
- Return an empty list if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.

### Example 1:
```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
```
### Example 2:
```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```

# Solution:
                    cog            2
                   /   \  
                  dog  log         3
                 /     /     lop
                dot   lot          4
               /       \ 
       hit -> hot      hot <- hit  5

Refer to p127m, instead of tracking the growing length, we now need to backtrack the results.
The changes are:
- Instead of removing word from set when adding queue, remove it when poping queue so that it can be added multiple times.
- Early return, need to complete the queue for the same depth when found.
- Each node has the link to its prev node.

#AMZN #YELP

#Backtracking #Breadth-first Search

#Similar questions [#126m](../p126m/README.md) [#127h](../p127h/README.md)