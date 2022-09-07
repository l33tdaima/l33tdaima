# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        if root is None:
            return ""
        lstr = (
            f"({self.tree2str(root.left)})" if root.left or root.right else ""
        )
        rstr = f"({self.tree2str(root.right)})" if root.right else ""
        return f"{root.val}{lstr}{rstr}"


# TESTS
for t, expected in [
    ("1,2,4,#,#,#,3,#,#", "1(2(4))(3)"),
    ("1,2,#,4,#,#,3,#,#", "1(2()(4))(3)"),
]:
    sol = Solution()
    actual = sol.tree2str(TreeNode.deserialize(t))
    print(t, "->", actual)
    assert actual == expected
