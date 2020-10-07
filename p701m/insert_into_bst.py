# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        if not root:
            return TreeNode(val)
        if val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        else:
            root.right = self.insertIntoBST(root.right, val)
        return root


# TESTS
tests = [
    ("#", 1, "1,#,#"),
    ("4,2,1,#,#,3,#,#,7,#,#", 5, "4,2,1,#,#,3,#,#,7,5,#,#,#"),
    (
        "40,20,10,#,#,30,#,#,60,50,#,#,70,#,#",
        25,
        "40,20,10,#,#,30,25,#,#,#,60,50,#,#,70,#,#",
    ),
]
for tree, val, expected in tests:
    sol = Solution()
    actual_tree = sol.insertIntoBST(TreeNode.deserialize(tree), val)
    actual = TreeNode.serialize(actual_tree)
    print("Insert", val, "into", tree, "->", actual)
    assert actual == expected
