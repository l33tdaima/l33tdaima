# 255. Verify Preorder Sequence in Binary Search Tree (Medium)

Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

You may assume each number in the sequence is unique.

Consider the following binary search tree:
```
     5
    / \
   2   6
  / \
 1   3
```
### Example 1:
```
Input: [5,2,6,1,3]
Output: false
```
### Example 2:
```
Input: [5,2,1,3,6]
Output: true
```
### Follow up:
Could you do it using only constant space complexity?

## Solution
There are two conditions for the given sequence,
- Preorder: The following number is the child of previous number
- BST: Either left (smaller) or right (larger)

If the sequence keep decreasing, we are walking the tree all the way left, this is no way to become invalid. However, if we have had a case the sequence go up (walk right), the following number cannot be smaller than a lower bound which is the node where we start going right.

Hence the algorithm is to maintain a stack of number sorted decreasingly, representing the left bound path from root. For each number in the sequence,
- Push number to stack if decreasing (walk left)
- Keep popping numbers from stack until the new number to be pushed doesn't break the order (find the parent where the new node belongs to as right child), compute the new lower bound.

To deal with the follow-up, abuse the input array as stack.

#MSFT #LNKD #FB #Zenefits

#Tree #Stack
