# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def flipMatchVoyage(self, root: TreeNode, voyage: List[int]) -> List[int]:
        ans, i = [], 0

        def dfs(root: TreeNode) -> bool:
            nonlocal i
            if root is None:
                return True
            i += 1
            if root.val != voyage[i - 1]:
                return False
            if root.left and root.left.val != voyage[i]:
                ans.append(root.val)
                return dfs(root.right) and dfs(root.left)
            return dfs(root.left) and dfs(root.right)

        return ans if dfs(root) else [-1]


# TESTS
for tree, voyage, expected in [
    ("1,#,#", [0], [-1]),
    ("1,#,#", [1], []),
    ("1,2,#,#,#", [2, 1], [-1]),
    ("1,2,#,#,#", [1, 2], []),
    ("1,2,#,#,3,#,#", [1, 3, 2], [1]),
    ("1,2,#,#,3,4,#,#,5,#,#", [1, 3, 5, 4, 2], [1, 3]),
]:
    sol = Solution()
    actual = sol.flipMatchVoyage(TreeNode.deserialize(tree), voyage)
    print("All flipped nodes ->", actual)
    assert sorted(actual) == sorted(expected)
