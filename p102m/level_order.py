# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        ans, queue = [], [root]
        while queue:
            ans.append([nd.val for nd in queue])
            queue = [child for nd in queue for child in (nd.left, nd.right) if child]
        return ans


# TESTS
for tree, expected in [
    ("3,9,#,#,20,15,#,#,7,#,#", [[3], [9, 20], [15, 7]]),
    ("1,#,#", [[1]]),
    ("#", []),
]:
    sol = Solution()
    actual = sol.levelOrder(TreeNode.deserialize(tree))
    print("Level order traversal of", tree, "->", actual)
    assert actual == expected
