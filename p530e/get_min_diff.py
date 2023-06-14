# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    pre, ans = -1, 10**5

    def getMinimumDifference(self, root: TreeNode) -> int:
        if root.left:
            self.getMinimumDifference(root.left)
        self.ans = min(self.ans, root.val - self.pre)
        self.pre = root.val
        if root.right:
            self.getMinimumDifference(root.right)
        return self.ans


# TESTS
for tree, expected in [
    ("4,2,1,#,#,3,#,#,6,#,#", 1),
    ("1,0,#,#,48,12,#,#,49,#,#", 1),
]:
    sol = Solution()
    actual = sol.getMinimumDifference(TreeNode.deserialize(tree))
    print("Min diff in BST", tree, "->", actual)
    assert actual == expected
