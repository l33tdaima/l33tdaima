# 450. Delete Node in a BST (Medium)

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.

### Note: Time complexity should be O(height of tree).

### Example:
```
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
```

## Solution
- Recursively call the function by `root.left = deleteNode(root.left, key)` or `root.right = deleteNode(root.right, key)`, until key is matched,
  - Root doesn't have left or right - return null;
  - Root only has left subtree - return the left subtree;
  - Root only has right subtree - return the right subtree;
  - Root has both left and right - find the minimum value in the right, set that value to the currently found node, then recursively delete the minimum value in the right subtree. (Another way is to to find the max value in the left.)

#UBER

#Tree