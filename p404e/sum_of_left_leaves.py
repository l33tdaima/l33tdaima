# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def sumOfLeftLeaves(self, root: TreeNode, isLeft: bool = False) -> int:
        if root is None:
            return 0
        if root.left is None and root.right is None:
            return root.val if isLeft else 0
        else:
            return self.sumOfLeftLeaves(
                root.left, True
            ) + self.sumOfLeftLeaves(root.right, False)


# TESTS
for tree, expected in [
    ("#", 0),
    ("1,2,#,#,#", 2),
    ("1,#,3,#,#", 0),
    ("1,2,#,#,3,#,#", 2),
    ("3,9,#,#,20,15,#,#,7,#,#", 24),
]:
    sol = Solution()
    actual = sol.sumOfLeftLeaves(TreeNode.deserialize(tree))
    print("Sum of left leaves of", tree, "->", actual)
    assert actual == expected
