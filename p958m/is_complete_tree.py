# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional


class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        bfs, i = [root], 0
        while bfs[i]:
            bfs.append(bfs[i].left)
            bfs.append(bfs[i].right)
            i += 1
        return not any(bfs[i:])


# TESTS
for tree, expected in [
    ("1,2,4,#,#,5,#,#,3,6,#,#,#", True),
    ("1,2,4,#,#,5,#,#,3,#,7,#,#", False),
]:
    sol = Solution()
    actual = sol.isCompleteTree(TreeNode.deserialize(tree))
    print(tree, "is a complete tree ->", actual)
    assert actual == expected
