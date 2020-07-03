from typing import List
from local_packages.binary_tree import TreeNode

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        ans = []

        def helper(node: TreeNode, level: int) -> None:
            if node is None:
                return
            if level >= len(ans):
                ans.append([])
            helper(node.left, level + 1)
            helper(node.right, level + 1)
            ans[level].append(node.val)

        helper(root, 0)
        return ans[::-1]


# TESTS
tests = [
    ("#", []),
    ("1,#,#", [[1]]),
    ("1,2,#,#,3,#,#", [[2, 3], [1]]),
    ("1,#,2,#,3,#,4,#,5,#,#", [[5], [4], [3], [2], [1]]),
    ("3,9,#,#,20,15,#,#,7,#,#", [[15, 7], [9, 20], [3]]),
]
for t in tests:
    sol = Solution()
    actual = sol.levelOrderBottom(TreeNode.deserialize(t[0]))
    print("Bottom-up level order traversal of", t[0], "->", actual)
    assert actual == t[1]
