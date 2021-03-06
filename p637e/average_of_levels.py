# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        ans, queue = [], [root] if root else []
        while queue:
            ans.append(sum([node.val for node in queue]) / len(queue))
            queue = [
                child for node in queue for child in (node.left, node.right) if child
            ]
        return ans


# TESTS
for tree, expected in [
    ("1", [1]),
    ("1,2,#,#,3,#,#", [1, 2.5]),
    ("1,2,3,4,#,#,#,#,#", [1, 2, 3, 4]),
    ("1,#,2,#,3,#,4,#,#", [1, 2, 3, 4]),
    ("1,#,2,3,4,#,#,#,#", [1, 2, 3, 4]),
    ("1,#,2,3,#,#,4,#,#", [1, 2, 3.5]),
    ("1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#", [1, 2.5, 5, 7.5]),
    ("3,9,#,#,20,15,#,#,7,#,#", [3, 14.5, 11]),
]:
    sol = Solution()
    actual = sol.averageOfLevels(TreeNode.deserialize(tree))
    print("Average of levels of", tree, "->", actual)
    assert actual == expected
