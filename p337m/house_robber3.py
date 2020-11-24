# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Tuple
from local_packages.binary_tree import TreeNode


class Solution:
    def rob(self, root: TreeNode) -> int:
        def helper(root: TreeNode) -> Tuple[int, int]:
            if not root:
                return 0, 0
            lt, rt = helper(root.left), helper(root.right)
            not_robbed = max(lt) + max(rt)
            robbed = root.val + lt[0] + rt[0]
            return not_robbed, robbed

        return max(helper(root))


# TESTS
for tree, expected in [
    ("", 0),
    ("1", 1),
    ("4,1,2,3,#,#,#,#,#", 7),
    ("3,2,#,3,#,#,3,#,1,#,#", 7),
    ("3,4,1,#,#,3,#,#,5,#,1,#,#", 9),
]:
    sol = Solution()
    actual = sol.rob(TreeNode.deserialize(tree))
    print("Max amount of robbery from", tree, "->", actual)
    assert actual == expected

