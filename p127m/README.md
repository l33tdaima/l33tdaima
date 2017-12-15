# 127. Word Ladder (Medium)

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

# Solution
Imagine the following search tree, do breadth-first search for the word with 1 char difference.
                    cog            2
                   /   \  
                  dog  log <- lag  3
                 /     /
                dot   lot          4
               /        
    hit(5) -> hot                  5

                    dog            2
                 /   |   \  
               cog  log  dot       3
                     |    \ 
                    lot   hot<-hit 4

#Breadth-first Search
#FB #AMZN #LNKD #SNAP #YELP
