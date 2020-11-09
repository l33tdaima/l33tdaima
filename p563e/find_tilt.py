# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def findTilt(self, root: TreeNode) -> int:
        def helper(node: TreeNode) -> (int, int):
            if not node:
                return 0, 0
            lsum, ltilt_sum = helper(node.left)
            rsum, rtilt_sum = helper(node.right)
            return node.val + lsum + rsum, abs(lsum - rsum) + ltilt_sum + rtilt_sum

        return helper(root)[1]


# TESTS
for tree, expected in [
    ("1,2,#,#,3,#,#", 1),
    ("4,2,3,#,#,5,#,#,9,#,7,#,#", 15),
    ("21,7,1,3,#,#,3,#,#,1,#,#,14,2,#,#,2,#,#", 9),
]:
    sol = Solution()
    actual = sol.findTilt(TreeNode.deserialize(tree))
    print("The sum of every tree node's tilt of", tree, "->", actual)
    assert actual == expected
