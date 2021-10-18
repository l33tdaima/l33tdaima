# 993. Cousins in Binary Tree (Easy)

Given the `root` of a binary tree with unique values and the values of two different nodes of the tree `x` and `y`, return `true` if the nodes corresponding to the values `x` and `y` in the tree are _cousins_, or `false` otherwise.

Two nodes of a binary tree are _cousins_ if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth `0`, and children of each depth `k` node are at the depth `k + 1`.

### Example 1:

```
        1
      /   \
     2     3
    /
   4

Input: root = [1,2,3,4], x = 4, y = 3
Output: false
```

### Example 2:

```
        1
      /   \
     2     3
      \     \
       4     5

Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
```

### Example 3:

```
        1
      /   \
     2     3
      \
       4

Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
```

### Constraints:

- The number of nodes in the tree is in the range `[2, 100]`.
- `1 <= Node.val <= 100`
- Each node has a unique value.
- `x != y`
- `x` and `y` are exist in the tree.

## Solution

### DFS

Traverse the tree and store the [parentValue, depth] for x and y when encountered, and then return true if depth are the same and parent are different.

### BFS

Use breadth-first search where queue stores the node and the value of parent, scan the nodes on the same level which are the candidates for cousin. The answer is true if and only if

- x and y are both found,
- parent(x) and parent(y) are not the same.

#AMZN

#Tree #Breath-first Search

#Similar questions [#102](../p102m/README.md) [#993](../p993e/README.md)
