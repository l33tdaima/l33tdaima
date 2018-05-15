# 653. Two Sum IV - Input is a BST (Easy)

Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

### Example 1:
```
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9
Output: True
```
### Example 2:
```
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
```
## Solution
### Binary Search Approach
- Inorder traverse the BST, generate a sorted array.
- Do a two pointer boundary search.
O(2N) in time and O(N) in space

### HashSet Approach
- Create a hashset
- Traverse the BST, in whatever order. Check if (k - p.val) in the hashset?
  - Yes, return true.
  - No, add p.val in the hashset.
O(N) in time and O(N) in space

#FB

#Tree

#Similar questions [#001e](../p001e/README.md) [#167e](../p167e/README.md) [#170e](../p170e/README.md) [p653e](../p653e/README.md)