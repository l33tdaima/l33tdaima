# 24. Swap Nodes in Pairs (Medium)

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

### Example 1:

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

### Example 2:

```
Input: head = []
Output: []
```

### Example 3:

```
Input: head = [1]
Output: [1]
```

### Constraints:

- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`

## Solution

### C++ Apporach

Use pointer of pointer, to store the head in the first iteration and then the memory address of .next member since then.

#MSFT #BBG #UBER

#Linked List
