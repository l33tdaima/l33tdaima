# 124. Binary Tree Maximum Path Sum (Hard)

Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

For example:
Given the below binary tree,

       1
      / \
     2   3
Return 6.

## Clarification
Path can't have branch, has to be a single route from node to node, otherwise it is much harder.

## Solution
* Root >= 0, Left >= 0, Right >= 0: newMax = max(prevMax, sum(All)), return Root + max(Left, Right);
* Root >= 0, Left < 0, Right < 0: newMax = max(prevMax, sum(Root)), return Root;
* Root >= 0, one >= 0, other <= 0: newMax = max(prevMax, sum(PositiveBranch)), return Root + max(Left, Right);
* Root < 0, Left >= 0, Right >= 0: newMax = max(prevMax, sum(All)), return Root + max(Left, Right);
* Root < 0, Left < 0, Right < 0: newMax = max(prevMax, Root), return Root;
* Root < 0, Left or Right >= 0, Right or Left <= 0: newMax = max(prevMax, sum(PostiveBranch)), return Root + max(Left, Right).

#Tree #Depth-first Search
