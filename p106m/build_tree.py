# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        assert len(inorder) == len(postorder)
        if len(inorder) == 0:
            return None
        root_index = inorder.index(postorder[-1])
        root = TreeNode(
            postorder[-1],
            self.buildTree(inorder[:root_index], postorder[:root_index]),
            self.buildTree(inorder[root_index + 1 :], postorder[root_index:-1]),
        )
        return root


# TESTS
tests = [
    ([], [], "#"),
    ([1], [1], "1,#,#"),
    ([2, 1], [2, 1], "1,2,#,#,#"),
    ([1, 2], [2, 1], "1,#,2,#,#"),
    ([2, 1, 3], [2, 3, 1], "1,2,#,#,3,#,#"),
    ([9, 3, 15, 20, 7], [9, 15, 7, 20, 3], "3,9,#,#,20,15,#,#,7,#,#"),
]
for t in tests:
    sol = Solution()
    actual = TreeNode.serialize(sol.buildTree(t[0], t[1]))
    print("Construct from", t[0], t[1], "->", actual)
    assert actual == t[2]
