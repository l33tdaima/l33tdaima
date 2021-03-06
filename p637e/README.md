# 637. Average of Levels in Binary Tree (Easy)

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

### Example 1:
```
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
```

### Note:
The range of node's value is in the range of 32-bit signed integer.

## Soluton
- Breadth first search.
  - Notice that the length of queue includes all the nodes at each level
  - Pop the queue and push children in a for loop instead of continuously, so that we can compute the average.

- Depth first search

#FB #AMZN

#Tree

#Similar questions [#102](../p102m/README.md) [#107](../p107e/README.md) [#637](../p637e/README.md)
