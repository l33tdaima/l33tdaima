# 116. Populating Next Right Pointers in Each Node (Medium)

You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

### Example 1:

```
         1
       /  \
      2    3
     / \  / \
    4  5  6  7

         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

### Example 2:

```
Input: root = []
Output: []
```

### Constraints:

- The number of nodes in the tree is in the range `[0, 2^12 - 1]`.
- `-1000 <= node.val <= 1000`

## Solution

The intuitive way is to do BFS and set up the links, but for this particular case with perfect binary tree, we can do

- Move level by level down by moving the linked list head for current level with `pHead = pHead.left`;
- When iterating linked list in each level, which is linked during the upper level iteration,
  - Point left to right;
  - Point right to next left, if there is any.

#MSFT

#Tree #Breadth-first Search

#Similar questions [#116m](../p116m/README.md) [#117m](../p117m/README.md)
