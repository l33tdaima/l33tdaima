# 230. Kth Smallest Element in a BST (Medium)

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

### Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

### Example 1:
```
Input: root = [3,1,4,null,2], k = 1
Output: 1
```
### Example 2:
```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```
### Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

## Solution
Inorder traversal of the BST, return when count matches the given k. O(N).

If the BST is modified often, we can carry the order index of each node, then we can binary search Kth smallest in O(log N).

#GOOGLE #BBG #UBER

#Tree