# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from local_packages.binary_tree import TreeNode


class Solution:
    def addOneRow(
        self, root: Optional[TreeNode], val: int, depth: int, left: bool = True
    ) -> Optional[TreeNode]:
        if depth == 1:
            nroot = TreeNode(
                val, root if left else None, None if left else root
            )
            return nroot
        if not root:
            return root
        root.left = self.addOneRow(root.left, val, depth - 1, True)
        root.right = self.addOneRow(root.right, val, depth - 1, False)
        return root


# TESTS
for tree, v, d, expected in [
    ("4,#,#", 1, 1, "1,4,#,#,#"),
    ("4,2,3,#,#,1,#,#,6,5,#,#,#", 1, 2, "4,1,2,3,#,#,1,#,#,#,1,#,6,5,#,#,#"),
    ("4,2,3,#,#,1,#,#,#", 1, 3, "4,2,1,3,#,#,#,1,#,1,#,#,#"),
    ("1,2,4,#,#,#,3,#,#", 5, 4, "1,2,4,5,#,#,5,#,#,#,3,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(
        sol.addOneRow(TreeNode.deserialize(tree), v, d)
    )
    print("Add a row", v, "to depth", d, "to tree", tree, "->", actual)
    assert actual == expected
