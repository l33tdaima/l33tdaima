# 314. Binary Tree Vertical Order Traversal (Medium)

Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

### Examples 1:

```
Input: [3,9,20,null,null,15,7]
   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7
Output:
[
  [9],
  [3,15],
  [20],
  [7]
]
```
### Examples 2:
```
Input: [3,9,8,4,0,1,7]
     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
Output:
[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
```
### Examples 3:
```
Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),
     3
    / \
   /   \
   9    8
  /\   / \
 /  \ /   \
 4  0 1    7
    /\
   /  \
   5   2
Output:
[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
```

## Solution
- Traverse the tree via BFS (Require top to down, otherwise DFS is also fine), add the value to a map using key 0 for root, (key - 1) for left child, and (key + 1) for right child, the value for the map is a list of node value.
- Eventually output the map content linearly.

#FB #AMZN #ORCL

#Tree #Hash Table

#Similar questions [#102](../p102m/README.md) [#314](../p314m/README.md) [#987](../p987m/README.md)
