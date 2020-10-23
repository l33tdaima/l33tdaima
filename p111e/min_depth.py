# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        ld = self.minDepth(root.left)
        rd = self.minDepth(root.right)
        if ld > 0 and rd > 0:
            return 1 + min(ld, rd)
        else:
            return 1 + ld + rd


# TESTS
for tree, expected in [
    ("#", 0),
    ("1,#,#", 1),
    ("1,#,2,#,#", 2),
    ("1,2,#,#,3,#,#", 2),
    ("3,9,#,#,20,15,#,#,7,#,#", 2),
    ("2,#,3,#,4,#,5,#,6,#,#", 5),
]:
    sol = Solution()
    actual = sol.minDepth(TreeNode.deserialize(tree))
    print("Max depth of", tree, "->", actual)
    assert actual == expected
