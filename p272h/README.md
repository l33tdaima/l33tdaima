# 272. Closest Binary Search Tree Value II (Hard)

Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.

### Note:
- Given target value is a floating point.
- You may assume k is always valid, that is: k ≤ total nodes.
- You are guaranteed to have only one unique set of k values in the BST that are closest to the target.

### Example:
```
Input: root = [4,2,5,1,3], target = 3.714286, and k = 2

    4
   / \
  2   5
 / \
1   3

Output: [4,3]
```

### Follow up:
Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?

## Solution
### Intuitive Apporach
Convert the BST to a sorted array in O(N), then locate the point closet to the target, search two ends for the k values. Overall O(N + logN + k).

### Time O(klogN) Space O(logN) Stack Based Approach
Walk down the tree towards the target to prepare two stacks, predecessors and successors, then merge them by poping whatever is closest to target until k.

### Time O(N) Space O(k) Apporach (Fastest in OJ)
Do an in-order traversal with a buffer of cap k, this buffer is always sorted increasingly.
- When the buffer does not reach to k yet, we push back the current value.
- When the buffer is full, since the new value to be pushed back is largest
  - if the distance to target is already greater than the front, we are done.
  - otherwise, pop front.
Finally return the buffer.


#LNKD #ForUsAll

#Stack #Tree
