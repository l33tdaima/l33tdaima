# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def isValidBST(
        self, root: TreeNode, lb: int = float("-Inf"), ub: int = float("Inf")
    ) -> bool:
        if not root:
            return True
        if root.val <= lb or root.val >= ub:
            return False
        return self.isValidBST(root.left, lb, root.val) and self.isValidBST(
            root.right, root.val, ub
        )


# TESTS
for tree, expected in [
    ("0,#,-1,#,#", False),
    ("0,#,#", True),
    ("1,#,#", True),
    ("1,2,#,#,#", False),
    ("2,#,1,#,#", False),
    ("2,1,#,#,#", True),
    ("1,2,#,#,3,#,#", False),
    ("2,1,#,#,3,#,#", True),
    ("5,1,#,#,4,3,#,#,6,#,#", False),
]:
    sol = Solution()
    actual = sol.isValidBST(TreeNode.deserialize(tree))
    print("Is", tree, "a valid BST? ->", actual)
    assert actual == expected
