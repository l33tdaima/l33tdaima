# 2. Integer List Add (Medium)
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