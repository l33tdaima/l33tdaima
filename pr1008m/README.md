# 1008. Construct Binary Search Tree from Preorder Traversal (Medium)

Given an array of integers preorder, which represents the _preorder traversal_ of a BST (i.e., _binary search tree_), construct the tree and return its root.

It is _guaranteed_ that there is always possible to find a binary search tree with the given requirements for the given test cases.

A _binary search tree_ is a binary tree where for every node, any descendant of Node.left has a value _strictly less than_ Node.val, and any descendant of Node.right has a value _strictly greater than_ Node.val.

A _preorder traversal_ of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

### Example 1:

```
            8
          /   \
         5    10
       /   \    \
      1    7    12

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
```

### Example 2:

```
Input: preorder = [1,3]
Output: [1,null,3]
```

### Constraints:

- `1 <= preorder.length <= 100`
- `1 <= preorder[i] <= 10^8`
- The values of `preorder` are _unique_.

## Solution

For each root, in order to find out the position in the preorder list after root which splits the left and right sub tree, we can do a simple linear search, which ends up O(N^2) complexity. Or we use binary search to improve to O(NlogN).

Can we do O(N)? We can give the function a bound the maximum number it will handle.

- The left recursion will take the elements smaller than node.val
- The right recursion will take the remaining elements smaller than bound

#Tree
