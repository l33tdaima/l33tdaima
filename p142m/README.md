# 142. Linked List Cycle II (Medium)

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

### Follow up:

Can you solve it using O(1) (i.e. constant) memory?

### Example 1:

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

### Example 2:

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

### Example 3:

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

## Solution

Consider the following linked list, where E is the cylce entry and X, the crossing point of fast and slow.

```
        H: distance from head to cycle entry E
        D: distance from E to X
        L: cycle length
                          _____
                         /     \
        head_____H______E       \
                        \       /
                         X_____/
```

If fast and slow both start at head, when fast catches slow, slow has traveled H+D and fast 2(H+D).
Assume fast has traveled n loops in the cycle, we have:
`2H + 2D = H + D + nL --> H + D = nL --> H = nL - D`
Thus if two pointers start from head and X, respectively, one first reaches E, the other also reaches E.

#Linked List #Two Pointera
