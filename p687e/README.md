# 687. Longest Univalue Path (Easy)

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

Note: The length of path between two nodes is represented by the number of edges between them.

### Example 1:
```
Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output:
2
```
### Example 2:
```
Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output:
2
```
### Note:
The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

## Solution
The longest univalue path could pass through any node. So we must visit each node and workout a logic to know the longest path at that node. It will be a post-order traversal as we need to know the state of two children, and pop the answer back up to the root.

### When at any node, there are three possibilites:
- longest path is in the left subtree but doesn't connect to me
- longest path is in the right subtree but doesn't connect to me
- longest path goes through me
All of these can be captured by `l + r` in the code, where `l` and `r` the return of left and right chid.

### Now what info does this return value carry?
It is the longest univalue path length contribute to its parent. (Our helper function knows parent node value). If this node is different from parent, return value is zero indicating the chain breaks and it will not contribute any more to the root.

#GOOGL

#Tree