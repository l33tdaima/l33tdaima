# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def trimBST(self, root: TreeNode, low: int, high: int) -> TreeNode:
        if not root:
            return root
        if root.val < low:
            return self.trimBST(root.right, low, high)
        elif root.val > high:
            return self.trimBST(root.left, low, high)
        else:
            root.left = self.trimBST(root.left, low, root.val)
            root.right = self.trimBST(root.right, root.val, high)
            return root


# TESTS
for tree, low, high, expected in [
    ("1,0,#,#,2,#,#", 1, 2, "1,#,2,#,#"),
    ("3,0,#,2,1,#,#,#,4,#,#", 1, 3, "3,2,1,#,#,#,#"),
    ("1,#,#", 1, 2, "1,#,#"),
    ("1,#,2,#,#", 1, 3, "1,#,2,#,#"),
    ("1,#,2,#,#", 2, 4, "2,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.trimBST(TreeNode.deserialize(tree), low, high))
    print("Trim BST", tree, "->", actual)
    assert actual == expected

