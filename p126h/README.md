# 126. Word Ladder II (Hard)

Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Note:
Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

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
