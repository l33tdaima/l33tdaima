# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from local_packages.binary_tree import TreeNode


class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:
        def helper(node: TreeNode, lower: int, upper: int) -> int:
            if not node:
                return upper - lower
            lower, upper = min(lower, node.val), max(upper, node.val)
            return max(
                helper(node.left, lower, upper),
                helper(node.right, lower, upper),
            )

        return helper(root, root.val, root.val)


# TESTS
for tree, expected in [
    ("1,2,#,#,4,#,#", 3),
    ("1,#,2,#,3,#,#", 2),
    ("8,3,1,#,#,6,4,#,#,7,#,#,10,#,14,13,#,#,#", 7),
    ("1,#,2,#,0,3,#,#,#", 3),
]:
    sol = Solution()
    actual = sol.maxAncestorDiff(TreeNode.deserialize(tree))
    print("Maximum Difference Between Node and Ancestor", tree, "->", actual)
    assert actual == expected
