# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        def dfs(node: Optional[TreeNode]) -> tuple[int, int, int]:
            if not node:
                return -1, -1, -1
            left, right = dfs(node.left), dfs(node.right)
            return (
                left[1] + 1,
                right[0] + 1,
                max(left[1] + 1, right[0] + 1, left[2], right[2]),
            )

        return dfs(root)[2]


# TESTS
for tree, expected in [
    ("1,#,#", 0),
    ("1,#,2,3,#,#,3,4,#,5,#,6,#,#,4,#,#", 3),
    ("1,2,#,3,4,#,5,#,#,4,#,#,2,#,#", 4),
]:
    sol = Solution()
    actual = sol.longestZigZag(TreeNode.deserialize(tree))
    print("Longest zigzag path in", tree, "->", actual)
    assert actual == expected
