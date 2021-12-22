# 143. Reorder List (Medium)

You are given the head of a singly linked-list. The list can be represented as:

```
L0→L1→…→Ln-1→Ln
```

Reorder the list to be on the following form:

```
L0→Ln→L1→Ln-1→L2→Ln-2→…
```

You may not modify the values in the list's nodes, only nodes itself may be changed.

### Example 1:

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

### Example 2:

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

### Constraints:

- The number of nodes in the list is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 1000`

## Solution

The trick of this problem is not to split the list in exactly half half, but the first half > the second half. E.g `[1,2,3,4]` will be split to `[1,2,3]` and `[4]`, `[1,2,3,4,5]` will be split to `[1,2,3]` and `[4,5]`.

#Linked List

#FB #AMZN #MSFT #ADBE

#Explore Facebook
