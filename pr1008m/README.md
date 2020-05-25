# 1008. Construct Binary Search Tree from Preorder Traversal (Medium)

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

### Example 1:
```
Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
            8
          /   \
         5    10
       /   \    \
      1    7    12
```

### Constraints:
- 1 <= preorder.length <= 100
- 1 <= preorder[i] <= 10^8
- The values of preorder are distinct.

## Solution
For each root, in order to find out the position in the preorder list after root which splits the left and right sub tree, we can do a simple linear search, which ends up O(N^2) complexity. Or we use binary search to improve to O(NlogN).

Can we do O(N)? We can give the function a bound the maximum number it will handle.
- The left recursion will take the elements smaller than node.val
- The right recursion will take the remaining elements smaller than bound

#Tree
