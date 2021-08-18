# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def helper(node: TreeNode, mfr: int) -> int:
            if node:
                return (
                    (node.val >= mfr)
                    + helper(node.left, max(mfr, node.val))
                    + helper(node.right, max(mfr, node.val))
                )
            else:
                return 0

        return helper(root, -10000)


# TESTS
for tree, expected in [
    ("3,1,3,#,#,#,4,1,#,#,5,#,#", 4),
    ("3,3,4,#,#,2,#,#,#", 3),
    ("1,#,#", 1),
]:
    sol = Solution()
    actual = sol.goodNodes(TreeNode.deserialize(tree))
    print("Good nodes in", tree, "->", actual)
    assert actual == expected
