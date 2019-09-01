# 143. Reorder List (Medium)

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

### Example 1:
```
Given 1->2->3->4, reorder it to 1->4->2->3.
```

### Example 2:
```
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
```

## Solution
The trick of this problem is not to split the list in exactly half half, but the first half > the second half. E.g `[1,2,3,4]` will be split to `[1,2,3]` and `[4]`, `[1,2,3,4,5]` will be split to `[1,2,3]` and `[4,5]`.

#Linked List

#FB #AMZN #MSFT #ADBE

#Explore Facebook
