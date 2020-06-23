# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def depth(self, node: TreeNode) -> int:
        if node is None:
            return 0
        return 1 + self.depth(node.left)

    def countNodes(self, root: TreeNode) -> int:
        if root is None:
            return 0
        left_depth = self.depth(root.left)
        right_depth = self.depth(root.right)
        if left_depth == right_depth:
            return pow(2, left_depth) + self.countNodes(root.right)
        else:
            return pow(2, right_depth) + self.countNodes(root.left)


# TESTS
tests = [
    ("#", 0),
    ("1,#,#", 1),
    ("1,2,4,#,#,#,3,#,#", 4),
    ("1,2,4,#,#,5,#,#,3,6,#,#,#", 6),
    ("1,2,4,#,#,5,#,#,3,6,#,#,7,#,#", 7),
]
for t in tests:
    sol = Solution()
    actual = sol.countNodes(TreeNode.deserialize(t[0]))
    print("Count nodes in", t[0], "->", actual)
    assert actual == t[1]
