# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> list[int]:
        return (
            self.inorderTraversal(root.left)
            + [root.val]
            + self.inorderTraversal(root.right)
            if root
            else []
        )


# TESTS
for t, expected in [
    ("1,#,2,3,#,#,#", [1, 3, 2]),
    ("#", []),
    ("1,#,#", [1]),
    ("1,2,#,#,3,#,#", [2, 1, 3]),
    ("1,2,3,4,#,#,#,#,#", [4, 3, 2, 1]),
    ("1,#,2,#,3,#,4,#,#", [1, 2, 3, 4]),
    ("1,#,2,3,4,#,#,#,#", [1, 4, 3, 2]),
    ("1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#", [4, 2, 5, 7, 1, 6, 8, 3]),
]:
    sol = Solution()
    actual = sol.inorderTraversal(TreeNode.deserialize(t))
    print("Inorder traversal of", t, "->", actual)
    assert actual == expected
