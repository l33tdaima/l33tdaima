# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        i = 0

        def recHelper(ubound=10 ** 9):
            nonlocal i
            if i == len(preorder) or preorder[i] > ubound:
                return None
            root = TreeNode(preorder[i])
            i += 1
            root.left = recHelper(root.val)
            root.right = recHelper(ubound)
            return root

        return recHelper()


tests = [
    [[], "#"],
    [[1], "1,#,#"],
    [[2, 1], "2,1,#,#,#"],
    [[2, 3], "2,#,3,#,#"],
    [[2, 1, 3], "2,1,#,#,3,#,#"],
    [[8, 5, 1, 7, 10, 12], "8,5,1,#,#,7,#,#,10,#,12,#,#"],
]
for t in tests:
    sol = Solution()
    actual = TreeNode.serialize(sol.bstFromPreorder(t[0]))
    print("BST from preorder traversal", t[0], "->", actual)
    assert actual == t[1]
