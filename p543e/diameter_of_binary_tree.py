# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional, Tuple
from local_packages.binary_tree import TreeNode


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def helper(root: Optional[TreeNode]) -> Tuple[int, int]:
            if not root:
                return 0, 0
            ldep, ldia = helper(root.left)
            rdep, rdia = helper(root.right)
            return max(ldep, rdep) + 1, max(ldia, rdia, ldep + rdep)

        return helper(root)[1]


# TESTS
for tree, expected in [
    ["#", 0],
    ["1,#,#", 0],
    ["1,2,#,#,#", 1],
    ["1,2,#,#,3,#,#", 2],
    ["1,2,4,#,#,5,#,#,3,#,#", 3],
    ["1,2,4,6,7,#,#,#,#,5,#,8,#,9,#,#,3,#,#", 6],
]:
    sol = Solution()
    actual = sol.diameterOfBinaryTree(TreeNode.deserialize(tree))
    print("Diameter of", tree, "->", actual)
    assert actual == expected
