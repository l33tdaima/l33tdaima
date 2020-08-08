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
        res = defaultdict(list)

        def helper(node: TreeNode, index: int, level: int) -> None:
            if node is None:
                return
            res[index].append((level, node.val))
            helper(node.left, index - 1, level + 1)
            helper(node.right, index + 1, level + 1)

        helper(root, 0, 0)
        return [[v for _, v in sorted(res[i])] for i in sorted(res)]


# TESTS
tests = [
    ("#", []),
    ("1,#,#", [[1]]),
    ("1,2,#,#,3,#,#", [[2], [1], [3]]),
    ("3,9,#,#,20,15,#,#,7,#,#", [[9], [3, 15], [20], [7]]),
    ("1,2,4,#,#,5,#,#,3,6,#,#,7,#,#", [[4], [2], [1, 5, 6], [3], [7]]),
    (
        "0,8,#,#,1,3,#,4,#,7,#,#,2,5,6,#,#,#,#",
        [[8], [0, 3, 6], [1, 4, 5], [2, 7]],
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.verticalTraversal(TreeNode.deserialize(t[0]))
    print("Vertical traversal of", t[0], "->", actual)
    assert actual == t[1]
