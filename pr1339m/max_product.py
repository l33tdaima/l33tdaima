# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional, Tuple
from local_packages.binary_tree import TreeNode


class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        def tsum(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            return node.val + tsum(node.left) + tsum(node.right)

        total = tsum(root)

        def helper(node: Optional[TreeNode]) -> Tuple[int, int]:
            if not node:
                return 0, 0
            lsum, lmax = helper(node.left)
            rsum, rmax = helper(node.right)
            return (
                node.val + lsum + rsum,
                max(lmax, rmax, lsum * (total - lsum), rsum * (total - rsum)),
            )

        return helper(root)[1] % (10 ** 9 + 7)


# TESTS
for tree, expected in [
    ("1,2,4,#,#,5,#,#,3,6,#,#,#", 110),
    ("1,#,2,3,#,#,4,5,#,#,6,#,#", 90),
    ("2,3,10,5,#,#,4,#,#,7,11,#,#,1,#,#,9,8,#,#,6,#,#", 1025),
    ("1,1,#,#,#", 1),
]:
    sol = Solution()
    actual = sol.maxProduct(TreeNode.deserialize(tree))
    print("Max product of splitted tree", tree, "->", actual)
    assert actual == expected
