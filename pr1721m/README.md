# 1721. Swapping Nodes in a Linked List (Medium)

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

### Example 1:

```
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
```

### Example 2:

```
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
```

### Example 3:

```
Input: head = [1], k = 1
Output: [1]
```

### Example 4:

```
Input: head = [1,2], k = 1
Output: [2,1]
```

### Example 5:

```
Input: head = [1,2,3], k = 2
Output: [1,2,3]
```

### Constraints:

- The number of nodes in the list is n.
- 1 <= k <= n <= 10^5
- 0 <= Node.val <= 100

## Solution

- When p reaches k-th node, we save n1 to the current node, and n2 to the head.
- We continue traversing the list, but now we also move n2 synchronously with p, their distance is k.
- When we reach the end, n2 will points to k-th node from end.

#Linked List
