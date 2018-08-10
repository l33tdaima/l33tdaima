# 250. Count Univalue Subtrees (Medium)

Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

### Example :
```
Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4
```

## Solution
Traverse the tree in post-order, return the tuple `(count, isUnival, val)`.

For each node, check if left and right subtree are already unival, increment count if current val is the same with left and right, otherwise don't increment but only pass the count up.

#GOOGL #AMZN #Pinterest

#Tree

#Similar questions [#250m](../p250m/README.md) [#687e](../p687e/README.md)
