# 445. Add Two Numbers II (Medium)

## LeetCode Description
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

## Internal
Given two positive integers represented as two singly linked lists of digits, implement a function to add the two numbers and produce the sum also as a singly linked list of digits. For example:           
1->2->3 + 4->5->6 = 5->7->9

## Sample inputs - Expected outputs                
- 1->2->3 + 4->5->6 = 5->7->9            
- 1->2->3 + 5->6    = 1->7->9
- 1->5    + 1->7->7 = 1->9->2
- 9->9->9 + 1       = 1->0->0->0

## Input corner cases             
- One of the numbers is empty list
- Both numbers are empty lists
- Numbers have different number of digits
- Addition will result in an extra 1 as carry (Ex: 999 + 1 = 1000)

#Linked List
