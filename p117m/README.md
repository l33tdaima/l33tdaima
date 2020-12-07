# 117. Populating Next Right Pointers in Each Node II (Medium)

Given a binary tree

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

### Follow up:

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.

### Example 1:

```
     1
   /  \
  2    3
 / \    \
4   5    7

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \    \
4-> 5 -> 7 -> NULL

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

## Solution

The intuitive way is to do BFS and set up the links, but restricted constant extra space, we do similar to [#116m](../p116m/README.md)

- Move level by level down by moving the linked list head, we need to figure out the head for the next level when iterating this level
- When iterating the linked link in each level, which is linked during the upper level iteration,
  - If left exists: Is there a prev node? connect prev.next = p.left : set the head of next level to p.left;
  - If right exists: Is there a prev node? connect prev.next = p.right: set the head of next level to p.right;

#FB #MSFT #BBG

#Tree #Depth-first Search #Breadth-first Search

#Similar question [#116m](../p116m/README.md) [#117m](../p117m/README.md)
