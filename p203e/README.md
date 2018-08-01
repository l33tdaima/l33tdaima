# 203. Remove Linked List Elements (Easy)

Remove all elements from a linked list of integers that have value val.

### Example:
```
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
```

## Solution
Elegant algrithm using double pointer inspried in [Linus Torvalds's TED talk](https://www.youtube.com/watch?v=o8NPllzkFhE) @15:38.

A pointer of pointer basically holds the memory address of previous node's `next` member variable. When we found a value match, modify the content of this *next* to skip the node to be delete, otherwise move it to the following node's `next` member.

#Pure Storage #GOOGL #AMZN #MSFT

#Linked List

#Similar questions [#203e](../p203e/README.md) [#237e](../p237e/README.md)