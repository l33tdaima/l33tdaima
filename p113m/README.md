# 113. Path Sum II (Medium)

Given the `root` of a binary tree and an integer `targetSum`, return all _root-to-leaf_ paths where the sum of the node values in the path equals `targetSum`. Each path should be returned as a list of the node _values_, not node references.

A _root-to-leaf_ path is a path starting from the root and ending at any leaf node. A _leaf_ is a node with no children.a

### Example 1:

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
```

### Example 2:

```
         1
       /   \
      2     3

Input: root = [1,2,3], targetSum = 5
Output: []
```

### Example 3:

```
Input: root = [1,2], targetSum = 0
Output: []
```

### Constraints:

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

#Backtracking #Tree #Depth-First Search #Binary Tree

### Similar questions

[#112](../p112e/README.md) [#113](../p113m/README.md) [#437](../p437m/README.md)
