# 138. Copy List with Random Pointer (Medium)

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

## Solution
The algorithm is composed of the follow three steps which are also 3 iteration rounds.

1. Iterate the original list and duplicate each node. The duplicate of each node follows its original immediately.
2. Iterate the new list and assign the random pointer for each duplicated node.
3. Restore the original list and extract the duplicated nodes.

O(n) in time and space complexity, no extra space needed.

#AMZN #MSFT #BBG #UBER
#Linked List #Hash Table
