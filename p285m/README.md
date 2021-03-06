# 285. Inorder Successor in BST (Medium)

Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Note: If the given node has no in-order successor in the tree, return null.

### Example 1:
```
Input: root = [2,1,3], p = 1

  2
 / \
1   3

Output: 2
```
### Example 2:
```
Input: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /   
1

Output: null
```

## Solution
```
           6
         /   \
        2     8
       / \   / \
      0   4 7   9
         / \
        3   5
```

### Clarification
The node given must be in the BST, BST contain NO duplicate values.

### Algorithm of Inorder version
Inorder sequence 0,2,3,4,5,6,7,8,9
- Try locating the node
- A node's successor is
  - Its direct parent or null if it dosen't have right child
  - The smallest node when inorder traversal of its right child

The iterative approach is
- Walk left if target is less than root, and set root to be a potential successor candidate
- Walk right if target is greater or equal to root
- Return the candidate when reaching leaf

In addition, a node's predecessor is
  - The largest node when inorder traversal of its left child
  - The direct parent or null if it doesn't have left child

### Algorithm of Preorder version
Preorder sequence 5,3,2,1,4,7,9
- If the node is equal to p
    - return left child if it has it
    - return right child if it has it
    - return null
- If p < root, go into left recursively, if return null, the successor is the right child
- If p > root, go into right recursively, if return null, it is null for this level

#FB #MSFT #Pocket Gems

#Tree
