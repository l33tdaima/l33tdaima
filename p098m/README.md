# 98. Validate Binary Search Tree (Medium)

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

### Example 1:

```
    2
   / \
  1   3

Input: root = [2,1,3]
Output: true
```

### Example 2:

```
     5
   /   \
  1     4
      /   \
     3     6

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

### Constraints:

- The number of nodes in the tree is in the range [1, 10^4].
- -2^31 <= Node.val <= 2^31 - 1

## Solution

### Clarification

Do we allow duplicates? No, if has duplicates, it is not a BST.

### Range Check Approach

A tree is BST if

1. its left is a BST and root is greater than any of left
2. its right is a BST and root is less than any of the right
   Hence we can pass a min and max range into left and right child to validate, but the initial min and max boundary have to change for value type short, int, long, or double, which is quite cumbersome.

### In-order Traversal Approach

If we print the tree in-order, for BST tree it has to be an increasing sequence. This approach maintains a reference to the previous node in the sequence, and validate it must be less than the current value.

#FB #MSFT #AMZN #BBG

#Tree #Depth-first search

#Explore Facebook
