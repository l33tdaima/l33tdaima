# 124. Binary Tree Maximum Path Sum (Hard)

Given a *non-empty* binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain *at least one node* and does not need to go through the root.

### Example 1:
```
Input: [1,2,3]

       1
      / \
     2   3
Output: 6
```

### Example 2:
```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7
Output: 42 = 20 + 15 + 7
```

## Clarification
Path can't have branch, has to be a single route from node to node, otherwise it is much harder.

## Solution
* Root >= 0, Left >= 0, Right >= 0: newMax = max(prevMax, sum(All)), return Root + max(Left, Right);
* Root >= 0, Left < 0, Right < 0: newMax = max(prevMax, sum(Root)), return Root;
* Root >= 0, one >= 0, the other < 0: newMax = max(prevMax, sum(PositiveBranch)), return Root + max(Left, Right);
* Root < 0, Left >= 0, Right >= 0: newMax = max(prevMax, sum(All)), return Root + max(Left, Right);
* Root < 0, Left < 0, Right < 0: newMax = max(prevMax, Root), return Root;
* Root < 0, one >= 0, the other < 0: newMax = max(prevMax, sum(PostiveBranch)), return Root + max(Left, Right).

#Tree #Depth-first Search

#Explore Facebook
