# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from typing import List, Optional
from local_packages.binary_tree import TreeNode


class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        def build(xs: List[int], ubound: int) -> Optional[TreeNode]:
            if not xs or xs[-1] > ubound:
                return None
            root = TreeNode(xs.pop())
            root.left = build(xs, root.val)
            root.right = build(xs, ubound)
            return root

        return build(preorder[::-1], float("Inf"))


for preorder, expected in [
    [[], "#"],
    [[1], "1,#,#"],
    [[2, 1], "2,1,#,#,#"],
    [[2, 3], "2,#,3,#,#"],
    [[2, 1, 3], "2,1,#,#,3,#,#"],
    [[8, 5, 1, 7, 10, 12], "8,5,1,#,#,7,#,#,10,#,12,#,#"],
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.bstFromPreorder(preorder))
    print("BST from preorder traversal", preorder, "->", actual)
    assert actual == expected
