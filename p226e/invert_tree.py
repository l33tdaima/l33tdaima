# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return root
        left = self.invertTree(root.left)
        right = self.invertTree(root.right)
        root.left, root.right = right, left
        return root


# TESTS
tests = [
    ["#", "#"],
    ["1", "1,#,#"],
    ["1,2,#,#,#", "1,#,2,#,#"],
    ["1,#,2,#,#", "1,2,#,#,#"],
    ["1,2,#,#,3,#,#", "1,3,#,#,2,#,#"],
    ["1,2,3,#,#,#,#", "1,#,2,#,3,#,#"],
    ["1,#,2,#,3,#,#", "1,2,3,#,#,#,#"],
    ["1,2,3,4,#,#,#,#,#", "1,#,2,#,3,#,4,#,#"],
    ["1,#,2,#,3,#,4,#,#", "1,2,3,4,#,#,#,#,#"],
    ["1,#,2,3,4,#,#,#,#", "1,2,#,3,#,4,#,#,#"],
    ["1,#,2,3,#,#,4,#,#", "1,2,4,#,#,3,#,#,#"],
]

for t in tests:
    sol = Solution()
    actual = TreeNode.serialize(sol.invertTree(TreeNode.deserialize(t[0])))
    print("Invert tree", t[0], "->", actual)
    assert t[1] == actual
