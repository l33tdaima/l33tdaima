# 653. Two Sum IV - Input is a BST (Easy)

Given the `root` of a Binary Search Tree and a target number `k`, return true if there exist two elements in the BST such that their sum is equal to the given target.

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

### Example 3:

```
Input: root = [2,1,3], k = 4
Output: true
```

### Example 4:

```
Input: root = [2,1,3], k = 1
Output: false
```

### Example 5:

```
Input: root = [2,1,3], k = 3
Output: true
```

### Constraints:

- The number of nodes in the tree is in the range [1, 10^4].
- -10^4 <= Node.val <= 10^4
- root is guaranteed to be a valid binary search tree.
- -10^5 <= k <= 10^5

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
