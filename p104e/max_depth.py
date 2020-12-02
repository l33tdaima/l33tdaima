# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))


# TESTS
for tree, expected in [
    ("#", 0),
    ("1,#,#", 1),
    ("1,2,#,#,3,#,#", 2),
    ("1,2,3,4,#,#,#,#,#", 4),
    ("1,#,2,#,3,#,4,#,#", 4),
    ("1,#,2,3,4,#,#,#,#", 4),
    ("1,#,2,3,#,#,4,#,#", 3),
    ("1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#", 4),
    ("3,9,#,#,20,15,#,#,7,#,#", 3),
]:
    sol = Solution()
    actual = sol.maxDepth(TreeNode.deserialize(tree))
    print("Max depth of", tree, "->", actual)
    assert actual == expected
