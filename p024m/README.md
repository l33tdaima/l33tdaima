# 24. Swap Nodes in Pairs (Medium)

Given a linked list, swap every two adjacent nodes and return its head.

### Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.

### Note:
- Your algorithm should use only constant extra space.
- You may not modify the values in the list's nodes, only nodes itself may be changed.

## Solution
### Intuitive Approach
Swap the nodes pair by pair, the trick is how to take care of the first two and returned header.
```
1->2->3->4
^
p
---
1->3->4
2->
---
2->1->3->4
```

### Optimal Apporach
Use pointer of pointer, to store the head in the first iteration and then the memory address of .next member since then.

#MSFT #BBG #UBER

#Linked List