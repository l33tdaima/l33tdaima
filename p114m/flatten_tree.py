# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def flattenV1(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        def helper(p: TreeNode) -> TreeNode:
            if not p or (not p.left and not p.right):
                return p
            right = p.right
            ltail = helper(p.left)
            if ltail:
                p.left, p.right = None, p.left
                ltail.right = right
            return helper(right) if right else ltail

        helper(root)

    def flattenV2(self, root: TreeNode) -> None:
        pre = None

        def helper(p: TreeNode) -> None:
            nonlocal pre
            if not p:
                return
            helper(p.right)
            helper(p.left)
            p.left, p.right = None, pre
            pre = p

        helper(root)


# TESTS
for tree, expected in [
    ("#", "#"),
    ("0,#,#", "0,#,#"),
    ("1,2,#,#,#", "1,#,2,#,#"),
    ("1,#,2,#,#", "1,#,2,#,#"),
    ("1,2,#,#,3,#,#", "1,#,2,#,3,#,#"),
    ("1,2,3,#,#,#,#", "1,#,2,#,3,#,#"),
    ("1,#,2,#,3,#,#", "1,#,2,#,3,#,#"),
    ("1,2,3,#,#,4,#,#,5,#,6,#,#", "1,#,2,#,3,#,4,#,5,#,6,#,#"),
]:
    sol = Solution()
    root = TreeNode.deserialize(tree)
    sol.flattenV2(root)
    actual = TreeNode.serialize(root)
    print("Flatten", tree, "->", actual)
    assert actual == expected
