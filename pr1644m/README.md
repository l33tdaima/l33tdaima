# 1644. Lowest Common Ancestor of a Binary Tree II (Medium)

Given the `root` of a binary tree, return the lowest common ancestor (LCA) of two given nodes, `p` and `q`. If either node `p` or `q` _does not exist_ in the tree, return `null`. All values of the nodes in the tree are _unique_.

According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes `p` and `q` in a binary tree `T` is the lowest node that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself)". A descendant of a node `x` is a node `y` that is on the path from node `x` to some leaf node.

### Example 1:

![example](example.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

### Example 2:

![example](example.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5. A node can be a descendant of itself according to the definition of LCA.
```

### Example 3:

![example](example.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
Output: null
Explanation: Node 10 does not exist in the tree, so return null.
```

### Constraints:

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-10^9 <= Node.val <= 10^9`
- All Node.val are unique.
- `p != q`

## Solution

The difference between this more generic problem and #236 is p and q is not guaranteed to exist in the tree, hence we can't return before checking left and right in post-order travesal but after, so that every node is travesed.

### Similar questions

[#235](../p235e/README.md) [#236](../p236m/README.md) [#1644](../pr1644m/README.md) [#1650](../pr1650m/README.md) [#1676](../pr1676m/README.md)
