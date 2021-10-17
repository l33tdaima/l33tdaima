# 236. Lowest Common Ancestor of a Binary Tree (Medium)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow _a node to be a descendant of itself_).”

### Example 1:

```
        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

### Example 2:

```
        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

### Example 3:

```
Input: root = [1,2], p = 1, q = 2
Output: 1
```

### Constraints:

- The number of nodes in the tree is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All Node.val are unique.
- `p != q`
- `p` and `q` will exist in the tree.

## Solution

### Gracful Apporach

Do a post-order traversal with end condition of matching either node or none. LCA is the root if both left recursion and right recursion return is not null, otherwise the one which is not null.

### Speedup Approach

If we return the count of matches in each recursion, we can speed up by early return when count reaches to 2.

#FB #MSFT #AMZN #LNKD #APPL

#Tree
