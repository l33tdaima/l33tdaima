# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from collections import defaultdict
from local_packages.binary_tree import TreeNode


class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        ddict = defaultdict(list)

        def helper(node: TreeNode, col: int, row: int) -> None:
            if node is None:
                return
            ddict[col].append((row, node.val))
            helper(node.left, col - 1, row + 1)
            helper(node.right, col + 1, row + 1)

        helper(root, 0, 0)
        return [[v for _, v in sorted(ddict[col])] for col in sorted(ddict)]


# TESTS
for t, expected in [
    ("#", []),
    ("1,#,#", [[1]]),
    ("1,2,#,#,3,#,#", [[2], [1], [3]]),
    ("3,9,#,#,20,15,#,#,7,#,#", [[9], [3, 15], [20], [7]]),
    ("1,2,4,#,#,5,#,#,3,6,#,#,7,#,#", [[4], [2], [1, 5, 6], [3], [7]]),
    ("0,8,#,#,1,3,#,4,#,7,#,#,2,5,6,#,#,#,#", [[8], [0, 3, 6], [1, 4, 5], [2, 7]],),
]:
    sol = Solution()
    actual = sol.verticalTraversal(TreeNode.deserialize(t))
    print("Vertical traversal of", t, "->", actual)
    assert actual == expected
