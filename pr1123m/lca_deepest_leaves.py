# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Tuple
from local_packages.binary_tree import TreeNode


class Solution:
    def lcaDeepestLeaves(self, root: TreeNode) -> TreeNode:
        def deepest(root: TreeNode) -> Tuple[int, TreeNode]:
            if not root:
                return 0, None
            left_depth, left = deepest(root.left)
            right_depth, right = deepest(root.right)
            if left_depth == right_depth:
                return left_depth + 1, root
            elif left_depth > right_depth:
                return left_depth + 1, left
            else:
                return right_depth + 1, right

        return deepest(root)[1]


# TESTS
for tree, expected in [
    ("1,#,#", "1,#,#"),
    ("1,2,#,#,#", "2,#,#"),
    ("0,1,#,2,#,#,3,#,#", "2,#,#"),
    ("3,5,6,#,#,2,7,#,#,4,#,#,1,0,#,#,8,#,#", "2,7,#,#,4,#,#"),
    (
        "1,2,4,#,#,5,8,10,#,#,11,#,#,9,12,#,#,13,#,#,3,6,#,#,#",
        "5,8,10,#,#,11,#,#,9,12,#,#,13,#,#",
    ),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.lcaDeepestLeaves(TreeNode.deserialize(tree)))
    print("The lowest common ancestor of its deepest leaves in", tree, "->", actual)
    assert actual == expected
