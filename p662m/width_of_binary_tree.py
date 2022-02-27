# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        ans, queue = 0, [(root, 0)]
        while queue:
            ans = max(ans, queue[-1][1] - queue[0][1] + 1)
            nextq = []
            for node, i in queue:
                if node.left:
                    nextq.append((node.left, i * 2))
                if node.right:
                    nextq.append((node.right, i * 2 + 1))
            queue = nextq
        return ans


for array, expected in [
    ("1,3,5,#,#,3,#,#,2,#,9,#,#", 4),
    ("1,3,5,#,#,3,#,#,#", 2),
    ("1,3,5,#,#,#,2,#,#", 2),
    ("1,3,5,6,#,#,#,#,2,#,9,#,7,#,#", 8),
]:
    sol = Solution()
    actual = sol.widthOfBinaryTree(TreeNode.deserialize(array))
    print("The maximum width of tree", array, "->", actual)
    assert actual == expected
