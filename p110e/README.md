# 110. Balanced Binary Tree (Easy)

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:
`A binary tree in which the depth of the two subtrees of every node never differ by more than 1.`

### Example 1:

```
    3
   / \
  9  20
    /  \
   15   7

Input: root = [3,9,20,null,null,15,7]
Output: true
```

### Example 2:

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

### Example 3:

```
Input: root = []
Output: true
```

### Constraints:

- The number of nodes in the tree is in the range [0, 5000].
- -10^4 <= Node.val <= 10^4

#Tree #Depth-first Search #DFS

#Similar questions [#104](../p104e/README.md) [#110](../p110e/README.md)
