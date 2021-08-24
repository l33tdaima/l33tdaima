# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from local_packages.binary_tree import TreeNode


class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        seen = set()

        def helper(node: Optional[TreeNode]) -> bool:
            if not node:
                return False
            if helper(node.left):
                return True
            if k - node.val in seen:
                return True
            seen.add(node.val)
            if helper(node.right):
                return True
            return False

        return helper(root)


# TESTS
for tree, k, expected in [
    ("5,3,2,#,#,4,#,#,6,#,7,#,#", 9, True),
    ("5,3,2,#,#,4,#,#,6,#,7,#,#", 28, False),
    ("2,1,#,#,3,#,#", 1, False),
    ("2,1,#,#,3,#,#", 4, True),
    ("2,1,#,#,3,#,#", 3, True),
]:
    sol = Solution()
    actual = sol.findTarget(TreeNode.deserialize(tree), k)
    print("There exist two elements in BST", tree, "sum to", k, "->", actual)
    assert actual == expected
