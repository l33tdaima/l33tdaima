# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder:
            return None
        i = inorder.index(preorder[0])
        return TreeNode(
            val=preorder[0],
            left=self.buildTree(preorder[1 : i + 1], inorder[:i]),
            right=self.buildTree(preorder[i + 1 :], inorder[i + 1 :]),
        )


# TESTS
for preorder, inorder, expected in [
    ([1], [1], "1,#,#"),
    ([1, 2], [2, 1], "1,2,#,#,#"),
    ([1, 2], [1, 2], "1,#,2,#,#"),
    ([3, 9, 20, 15, 7], [9, 3, 15, 20, 7], "3,9,#,#,20,15,#,#,7,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.buildTree(preorder, inorder))
    print("Build Tree ->", actual)
    assert actual == expected
