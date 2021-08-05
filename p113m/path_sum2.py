# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
        ans = []

        def dfs(node: TreeNode, pathsum: int, path: List[int]) -> None:
            if not node:
                return
            pathsum += node.val
            path.append(node.val)
            if not node.left and not node.right and pathsum == targetSum:
                ans.append(list(path))
            dfs(node.left, pathsum, path)
            dfs(node.right, pathsum, path)
            path.pop()

        dfs(root, 0, [])
        return ans


# TESTS
for tree, targetSum, expected in [
    ("5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,5,#,#,1,#,#", 22, [[5, 4, 11, 2], [5, 8, 4, 5]]),
    ("1,2,#,#,3,#,#", 5, []),
    ("1,2,#,#,3,#,#", 4, [[1, 3]]),
    ("1,2,#,#,#", 0, []),
    ("1,2,#,#,#", 3, [[1, 2]]),
    ("#", 0, []),
]:
    sol = Solution()
    actual = sol.pathSum(TreeNode.deserialize(tree), targetSum)
    print(tree, "all paths with sum equals", targetSum, "->", actual)
    assert actual == expected
