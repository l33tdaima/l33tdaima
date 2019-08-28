# 138. Copy List with Random Pointer (Medium)

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

### Example
```
Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
```

### Note:
You must return the copy of the given head as a reference to the cloned list.

## Solution
The algorithm is composed of the follow three steps which are also 3 iteration rounds.

1. Iterate the original list and duplicate each node. The duplicate of each node follows its original immediately.
2. Iterate the new list and assign the random pointer for each duplicated node.
3. Restore the original list and extract the duplicated nodes.

O(n) in time and space complexity, no extra space needed.

#Linked List #Hash Table

#AMZN #MSFT #FB #BBG #GOOGL

#Explore Facebook

#Similar questions [#133](../p133m/README.md) [#138](../p138m/README.md)
