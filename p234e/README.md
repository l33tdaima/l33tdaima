# 234. Palindrome Linked List (Easy/Medium)

Given the head of a singly linked list, return true if it is a palindrome.

### Example 1:

```
Input: head = [1->2->2->1]
Output: true
```

### Example 2:

```
Input: head = [1->2]
Output: false
```

### Constraints:

- The number of nodes in the list is in the range [1, 10^5].
- 0 <= Node.val <= 9

_Follow up:_ Could you do it in O(n) time and O(1) space?

## Solution

- Look for the mid point using fast slow approach.
- Reverse the linked list when moving slow pointer.
- From the mid point, move towards both direction to do palindrome check.

#FB #AMZN #IXL
