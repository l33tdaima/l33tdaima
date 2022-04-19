# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def recoverTree(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        first, second, prev = None, None, TreeNode(float("-Inf"))

        def helper(node: TreeNode) -> None:
            nonlocal first, second, prev
            if not node:
                return

            helper(node.left)
            # in-order validation for the incorrect
            if not first and prev.val > node.val:
                first = prev
            if first and prev.val > node.val:
                second = node
            prev = node

            helper(node.right)

        helper(root)
        first.val, second.val = second.val, first.val


# TESTS
for tree, expected in [
    ("2,3,#,#,1,#,#", "2,1,#,#,3,#,#"),
    ("1,3,#,2,#,#,#", "3,1,#,2,#,#,#"),
    ("3,1,#,#,4,2,#,#,#", "2,1,#,#,4,3,#,#,#"),
]:
    sol = Solution()
    root = TreeNode.deserialize(tree)
    sol.recoverTree(root)
    actual = TreeNode.serialize(root)
    print("Recover BST", tree, "->", actual)
    assert actual == expected
