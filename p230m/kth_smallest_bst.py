# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        def inorder(node: TreeNode):
            if node:
                yield from inorder(node.left)
                yield node
                yield from inorder(node.right)

        for i, node in enumerate(inorder(root)):
            if i == k - 1:
                return node.val


# TESTS
for array, k, expected in [
    ["1,#,#", 1, 1],
    ["2,1,#,#,3,#,#", 2, 2],
    ["2,1,#,#,3,#,#", 3, 3],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 1, 2],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 2, 3],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 3, 4],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 4, 5],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 5, 6],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 6, 7],
]:
    sol = Solution()
    tree = TreeNode.deserialize(array)
    actual = sol.kthSmallest(tree, k)
    print("The", f"{k}-th smallest value in BST", array, "->", actual)
    assert actual == expected
