# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def helper(root: TreeNode) -> (bool, int):
            if not root:
                return True, 0
            lres, lht = helper(root.left)
            rres, rht = helper(root.right)
            return lres and rres and abs(lht - rht) <= 1, max(lht, rht) + 1

        return helper(root)[0]


# TESTS
for tree, expected in [
    ("#", True),
    ("1,#,#", True),
    ("1,2,#,#,#", True),
    ("1,#,2,#,3,#,#", False),
    ("1,2,#,#,3,#,#", True),
    ("3,9,#,#,20,15,#,#,7,#,#", True),
    ("1,2,3,4,#,#,4,#,#,3,#,#,2,#,#", False),
]:
    sol = Solution()
    actual = sol.isBalanced(TreeNode.deserialize(tree))
    print("Is", tree, "balanced? ->", actual)
    assert actual == expected
