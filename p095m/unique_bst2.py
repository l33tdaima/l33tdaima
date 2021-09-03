# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List, Optional
from functools import lru_cache
from local_packages.binary_tree import TreeNode


class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        @lru_cache
        def trees(first: int, last: int) -> List[Optional[TreeNode]]:
            return [
                TreeNode(root, left, right)
                for root in range(first, last + 1)
                for left in trees(first, root - 1)
                for right in trees(root + 1, last)
            ] or [None]

        return trees(1, n)


# TESTS
for n in range(1, 5):
    sol = Solution()
    actual = sol.generateTrees(n)
    print("Unique BST of n =", n, "->", [TreeNode.serialize(t) for t in actual])
