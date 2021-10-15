"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""
from local_packages.binary_tree import TreeNode


class Solution:
    def connect(self, h1: TreeNode, h2: TreeNode) -> TreeNode:
        if not h1:
            return h2
        if not h2:
            return h1
        t1, t2 = h1.left, h2.left
        h2.left, t1.right = t1, h2
        t2.right, h1.left = h1, t2
        return h1

    def treeToDoublyList(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        lhead = self.treeToDoublyList(root.left)
        rhead = self.treeToDoublyList(root.right)
        # make root itself a single node DLL
        root.left = root
        root.right = root
        return self.connect(self.connect(lhead, root), rhead)


# TESTS
for tree, expected in [
    ("4,2,1,#,#,3,#,#,5,#,#", [1, 2, 3, 4, 5]),
    ("2,1,#,#,3,#,#", [1, 2, 3]),
    ("#", []),
    ("1,#,#", [1]),
]:
    sol = Solution()
    raw_actual = sol.treeToDoublyList(TreeNode.deserialize(tree))
    actual, p = [], raw_actual
    while p and p.right != raw_actual:
        actual.append(p.val)
        p = p.right
    if p:
        actual.append(p.val)

    print("Convert tree", tree, "to doubly linked list ->", actual)
