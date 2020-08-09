# 437. Path Sum III (Easy)

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

### Example:
```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
```
### Example:
```
root = [1,-2,-3,1,3,-2,null,-1], sum = -1
       1
     /   \
   -2    -3
   / \   /
  1   3 -2
 /
-1 

Return 4. The paths that sum to -1 are:
1. 1 -> -2
2. 1 -> -2 -> 1 -> -1
3. -2 -> 1
4. -1
```

## Solution
### O(n^2) solution
The answer is either including root (pass down sum - root.val to the children) or no including root (pass down sum to the children)

### O(n) solution
We evaluate the cumulative sum when traversing the tree in preorder, and store the cumulative sum we have seen down the path from root. In any node, if the current cumulative `sum - target` has been met before, we found a solution.

But we need to substract the count of this cumulative sum by one after all its children have been traversed, otherwise it will affect solution in other branch.

#Tree
