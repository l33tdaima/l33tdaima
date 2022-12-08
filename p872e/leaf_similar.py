# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def leafSimilar(
        self, root1: Optional[TreeNode], root2: Optional[TreeNode]
    ) -> bool:
        def leafValueSeq(root: Optional[TreeNode]) -> list:
            if not root:
                return []
            if not root.left and not root.right:
                return [root.val]
            else:
                return leafValueSeq(root.left) + leafValueSeq(root.right)

        return leafValueSeq(root1) == leafValueSeq(root2)


# TESTS
for tree1, tree2, expected in [
    ("1,#,#", "1,#,#", True),
    ("1,2,#,#,#", "1,#,2,#,#", True),
    (
        "3,5,6,#,#,2,7,#,#,4,#,#,1,9,#,#,8,#,#",
        "3,5,6,#,#,7,#,#,1,4,#,#,2,9,#,#,8,#,#",
        True,
    ),
    ("1,2,#,#,3,#,#", "1,3,#,#,2,#,#", False),
]:
    r1, r2 = TreeNode.deserialize(tree1), TreeNode.deserialize(tree2)
    sol = Solution()
    actual = sol.leafSimilar(r1, r2)
    print("Tree1:", tree1, "and Tree2:", tree2, "are leaf similar ->", actual)
    assert actual == expected
