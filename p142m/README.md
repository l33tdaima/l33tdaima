# 142. Linked List Cycle II (Medium)

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list. Can you solve it without using extra space?

## Solution
Consider the following linked list, where E is the cylce entry and X, the crossing point of fast and slow.
        H: distance from head to cycle entry E
        D: distance from E to X
        L: cycle length
                          _____
                         /     \
        head_____H______E       \
                        \       /
                         X_____/   
        
    
If fast and slow both start at head, when fast catches slow, slow has traveled H+D and fast 2(H+D). 
Assume fast has traveled n loops in the cycle, we have:
2H + 2D = H + D + L  -->  H + D = nL  --> H = nL - D
Thus if two pointers start from head and X, respectively, one first reaches E, the other also reaches E.

#Linked List #Two Pointera
