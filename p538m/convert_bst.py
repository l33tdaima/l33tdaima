# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        def fold(p: TreeNode, s: int) -> int:
            if not p:
                return s
            p.val += fold(p.right, s)
            return fold(p.left, p.val)

        fold(root, 0)
        return root


# TESTS
for tree, expected in [
    (
        "4,1,0,#,#,2,#,3,#,#,6,5,#,#,7,#,8,#,#",
        "30,36,36,#,#,35,#,33,#,#,21,26,#,#,15,#,8,#,#",
    ),
    ("0,#,1,#,#", "1,#,1,#,#"),
    ("1,0,#,#,2,#,#", "3,3,#,#,2,#,#"),
    ("3,2,1,#,#,#,4,#,#", "7,9,10,#,#,#,4,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.convertBST(TreeNode.deserialize(tree)))
    print("Convert BST", tree, "to greater tree ->", actual)
    assert actual == expected
