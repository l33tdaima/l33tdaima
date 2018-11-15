# 742. Closest Leaf in a Binary Tree (Medium/Hard)

Given a binary tree where every node has a unique value, and a target key k, find the value of the nearest leaf node to target k in the tree.

Here, nearest to a leaf means the least number of edges travelled on the binary tree to reach any leaf of the tree. Also, a node is called a leaf if it has no children.

In the following examples, the input tree is represented in flattened form row by row. The actual root tree given will be a TreeNode object.

### Example 1:
```
Input:
root = [1, 3, 2], k = 1
Diagram of binary tree:
          1
         / \
        3   2

Output: 2 (or 3)
Explanation: Either 2 or 3 is the nearest leaf node to the target of 1.
```
### Example 2:
```
Input:
root = [1], k = 1
Output: 1

Explanation: The nearest leaf node is the root node itself.
```
### Example 3:
```
Input:
root = [1,2,3,4,null,null,null,5,null,6], k = 2
Diagram of binary tree:
             1
            / \
           2   3
          /
         4
        /
       5
      /
     6

Output: 3
Explanation: The leaf node with value 3 (and not the leaf node with value 6) is nearest to the node with value 2.
```
### Note:
1. root represents a binary tree with at least 1 node and at most 1000 nodes.
2. Every node has a unique node.val in range [1, 1000].
3. There exists some node in the given binary tree for which node.val == k.

## Solution
We need a recursive helper function to carry info from bottom up in a post-order traversal. The return value contains
- distance from this root to target
- closest leaf to current node: [value, dist]
- closest leaf to target: [value, dist]

The last one which is the answer is the challenging part which has two cases
- Root == target: The closer leaf to either left or right child, dist + 1
- Root != target, and when target is found on either child's path: We need to compare two pathes
  1. The closest under the child containing the target
  2. The other path goes through the root

#Tree

#Databricks #GOOGL #AMZN
