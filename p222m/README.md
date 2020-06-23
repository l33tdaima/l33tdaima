# 222. Count Complete Tree Nodes (Medium)

Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

### Example:
```
Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
```

## Solution
Compare the depth of left and right sub tree:
- Same: the left is a perfect binary tree with node count (2^left_depth - 1) plus 1 root, we recursively count the right
- Otherwise: the right is a perfect binary tree with node count (2^right_depth - 1) plus 1 root, we recursively count the right

O(logN * logN)


#Binary Search #Tree
