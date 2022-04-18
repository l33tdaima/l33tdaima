# 230. Kth Smallest Element in a BST (Medium)

Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.

### Example 1:

```
   3
  / \
 1   4
  \
   2

Input: root = [3,1,4,null,2], k = 1
Output: 1
```

### Example 2:

```
       5
      / \
     3   6
    / \
   2   4
  /
 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

### Constraints:

- The number of nodes in the tree is `n`.
- `1 <= k <= n <= 10^4`
- `0 <= Node.val <= 10^4`

### Follow up:

What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

## Solution

Inorder traversal of the BST, return when count matches the given k. O(N).

If the BST is modified often, we can carry a count field for each node, which is the sum of left and right count. It will take O(n) time when we calculate the count value for the whole tree. After that, we can do binary search for Kth smallest in O(height). When inserting/deleting node from BST, the path up to root needs to update count field O(height).

#GOOGLE #BBG #UBER

#Tree
