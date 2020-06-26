# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        # Recursive helper to pass down the parent's value
        def helper(node: TreeNode, s: int) -> int:
            if not node:
                return 0
            if not node.left and not node.right:
                return s * 10 + node.val
            return helper(node.left, s * 10 + node.val) + helper(
                node.right, s * 10 + node.val
            )

        return helper(root, 0)


# TESTS
tests = [
    ("2,#,#", 2),
    ("1,2,#,#,3,#,#", 25),
    ("4,9,5,#,#,1,#,#,0,#,#", 1026),
    ("5,2,1,3,#,#,#,4,#,#", 5737),
]
for t in tests:
    sol = Solution()
    actual = sol.sumNumbers(TreeNode.deserialize(t[0]))
    print("Sum Root to Leaf Numbers of", t[0], "->", actual)
    assert actual == t[1]
