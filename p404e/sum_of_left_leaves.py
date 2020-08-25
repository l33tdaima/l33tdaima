# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        def helper(node: TreeNode, is_left: bool) -> int:
            if node is None:
                return 0
            if node.left is None and node.right is None:
                return node.val if is_left else 0
            else:
                return helper(node.left, True) + helper(node.right, False)

        return helper(root, False)


# TESTS
tests = [
    ("#", 0),
    ("1,2,#,#,#", 2),
    ("1,#,3,#,#", 0),
    ("1,2,#,#,3,#,#", 2),
    ("3,9,#,#,20,15,#,#,7,#,#", 24),
]
for t in tests:
    sol = Solution()
    actual = sol.sumOfLeftLeaves(TreeNode.deserialize(t[0]))
    print("Sum of left leaves of", t[0], "->", actual)
    assert actual == t[1]
