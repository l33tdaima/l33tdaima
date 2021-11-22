# 450. Delete Node in a BST (Medium)

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.

### Example:

```
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]

    5
   / \
  3   6
 / \   \
2   4   7

Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
    5
   / \
  4   6
 /     \
2       7
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
    5
   / \
  2   6
   \   \
    4   7
```

### Example 2:

```
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
```

### Example 3:

```
Input: root = [], key = 0
Output: []
```

## Solution

- Recursively call the function by `root.left = deleteNode(root.left, key)` or `root.right = deleteNode(root.right, key)`. In this way we can maintain the link between parent and children.
- When we found the matching key is the root to be deleted
  - Root doesn't have left or right - return null (delete the leave);
  - Root only has left subtree - return the left subtree;
  - Root only has right subtree - return the right subtree;
  - Root has both left and right
    - After we delete the root, if use direct left or right as replacement, we need to so some merge which is nontrivial. The only way avoiding this is use the minimum value in the right (or the max in the left).
    - Swap node is also not trivial in recursion, but we can only swap the value and delete the minimum value in the right subtree by continue recursion.

#UBER

#Tree
