# 1339. Maximum Product of Splitted Binary Tree (Medium)

Given the `root` of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return _the maximum product of the sums of the two subtrees_. Since the answer may be too large, return it modulo `10^9 + 7`.

Note that you need to maximize the answer before taking the mod and not after taking it.

### Example 1:

![example1](example1.png)

```
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
```

### Example 2:

![example2](example2.png)

```
Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
```

### Example 3:

```
Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025
```

### Example 4:

```
Input: root = [1,1]
Output: 1
```

### Constraints:

- The number of nodes in the tree is in the range `[2, 5 * 10^4]`.
- `1 <= Node.val <= 10^4`

### Hint

If we know the sum of a subtree, the answer is `max( (total_sum - subtree_sum) * subtree_sum)` in each node.

#Tree #Depth-First Search #Binary Tree
