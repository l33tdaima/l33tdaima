# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional, Tuple
from local_packages.binary_tree import TreeNode


class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        def helper(
            root: Optional[TreeNode], target: int, parent: TreeNode, depth: int
        ) -> Tuple[TreeNode, int]:
            if not root:
                return None, -1
            if root.val == target:
                return parent, depth
            lpar, ldep = helper(root.left, target, root, depth + 1)
            if lpar:
                return lpar, ldep
            return helper(root.right, target, root, depth + 1)

        xpar, xdep = helper(root, x, root, 0)
        ypar, ydep = helper(root, y, root, 0)
        return xdep == ydep and xpar != ypar


# TESTS
for tree, x, y, expected in [
    ("1,2,4,#,#,#,3,#,#", 4, 3, False),
    ("1,2,#,4,#,#,3,#,5,#,#", 5, 4, True),
    ("1,2,#,4,#,#,3,#,#", 2, 3, False),
]:
    sol = Solution()
    actual = sol.isCousins(TreeNode.deserialize(tree), x, y)
    print("Is", x, "and", y, "cousin in", tree, "->", actual)
    assert actual == expected
