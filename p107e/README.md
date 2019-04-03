# 107. Binary Tree Level Order Traversal II (Easy)

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

### For example:
Given binary tree [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
return its bottom-up level order traversal as:
```
[
  [15,7],
  [9,20],
  [3]
]
```

## Solution
This can be solved both BFS and DFS. BFS is more intuitive, but DFS (post-order traversal) is concise and faster.

#FB

#Tree #Breadth-first Search #Depth-first Search

#Similar questions [#102](../p102m/README.md) [#107](../p107e/README.md) [#637](../p637e/README.md)
