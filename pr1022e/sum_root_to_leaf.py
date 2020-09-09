# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def sumRootToLeaf(self, root: TreeNode) -> int:
        def helper(node: TreeNode, parent: int) -> int:
            if not node:
                return 0
            val = (parent << 1) + node.val
            if node.left == node.right:
                return val
            return helper(node.left, val) + helper(node.right, val)

        return helper(root, 0)


# TESTS
tests = [
    ("#", 0),
    ("1,#,#", 1),
    ("0,1,#,#,#", 1),
    ("0,#,0,#,#", 0),
    ("1,0,#,#,#", 2),
    ("1,#,1,#,#", 3),
    ("1,0,#,#,1,#,#", 5),
    ("1,1,0,#,#,0,#,#,1,#,#", 15),
    ("1,0,0,#,#,1,#,#,1,0,#,#,1,#,#", 22),
]
for t, expected in tests:
    sol = Solution()
    actual = sol.sumRootToLeaf(TreeNode.deserialize(t))
    print("Sum root to leaf", t, "->", actual)
    assert actual == expected
