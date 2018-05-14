# 234. Palindrome Linked List (Easy/Medium)
Given a singly linked list, determine if it is a palindrome.

### Example 1:
```
Input: 1->2
Output: false
```
### Example 2:
```
Input: 1->2->2->1
Output: true
```

Follow up:
Could you do it in O(n) time and O(1) space?

## Solution
- Look for the mid point using fast slow approach.
- Reverse the linked list when moving slow pointer.
- From the mid point, move towards both direction to do palindrome check.

#FB #AMZN #IXL
