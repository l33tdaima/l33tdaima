# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        if not root:
            return 0
        if root.val < low:
            return self.rangeSumBST(root.right, low, high)
        if root.val > high:
            return self.rangeSumBST(root.left, low, high)
        return (
            root.val
            + self.rangeSumBST(root.left, low, high)
            + self.rangeSumBST(root.right, low, high)
        )


# TESTS
for tree, low, high, expected in [
    ("10,5,3,#,#,7,#,#,15,#,18,#,#", 7, 15, 32),
    ("10,5,3,1,#,#,#,7,6,#,#,#,15,13,#,#,18,#,#", 6, 10, 23),
]:
    sol = Solution()
    actual = sol.rangeSumBST(TreeNode.deserialize(tree), low, high)
    print("Range sum of", tree, "->", actual)
    assert actual == expected
