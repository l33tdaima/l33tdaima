# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from local_packages.binary_tree import TreeNode


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        if targetSum == root.val and root.left is None and root.right is None:
            return True
        return self.hasPathSum(root.left, targetSum - root.val) or self.hasPathSum(
            root.right, targetSum - root.val
        )


# TESTS
for tree, targetSum, expected in [
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,#,1,#,#", 22, True],
    ["1,2,3,#,#,#,#", 5, False],
    ["1,2,#,#,#", 0, False],
    ["1,2,#,#,#", 1, False],
    ["#", 4, False],
    ["1", 1, True],
    ["1", 2, False],
    ["1,2,3,#,#,#,#", 6, True],
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,#,1,#,#", 23, False],
]:
    sol = Solution()
    actual = sol.hasPathSum(TreeNode.deserialize(tree), targetSum)
    print(tree, "has path sum", targetSum, "->", actual)
    assert actual == expected
