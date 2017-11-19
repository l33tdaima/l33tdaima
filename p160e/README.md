# 160. Intersection of Two Linked Lists (Easy)

Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

## Solution
There is a very elegant solution by hpplayer which leverages the invariant of LA + LB = LB + LA, where LA and LB are the length of list A and B.
Since LA = A + C, LB = B + C, where C is the common section, then A + C + B + C = B + C + A + C, hence they will meet on the starting point of C in their second run after continuing their path after connect to the other list as the end of first traversal.

#Linked List
