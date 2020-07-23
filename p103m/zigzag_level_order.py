# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []
        queue, ans, dir = [root], [], 1
        while queue:
            ans.append([node.val for node in queue[::dir]])
            dir *= -1
            next_level = []
            for node in queue:
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
            queue = next_level
        return ans


# TESTS
tests = [
    ("#", []),
    ("1,#,#", [[1]]),
    ("1,2,#,#,3,#,#", [[1], [3, 2]]),
    ("1,2,3,4,#,#,#,#,#", [[1], [2], [3], [4]]),
    ("1,#,2,#,3,#,4,#,#", [[1], [2], [3], [4]]),
    ("1,#,2,3,4,#,#,#,#", [[1], [2], [3], [4]]),
    ("1,#,2,3,#,#,4,#,#", [[1], [2], [3, 4]]),
    ("3,9,#,#,20,15,#,#,7,#,#", [[3], [20, 9], [15, 7]]),
    ("3,9,#,11,#,#,20,15,#,#,7,#,#", [[3], [20, 9], [11, 15, 7]]),
]
for t in tests:
    sol = Solution()
    actual = sol.zigzagLevelOrder(TreeNode.deserialize(t[0]))
    print("Zigzag level order of", t[0], "->", actual)
    assert actual == t[1]
