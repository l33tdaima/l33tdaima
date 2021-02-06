# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import List


class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        ans = []

        def helper(node: TreeNode, index: int) -> None:
            if not node:
                return
            if index >= len(ans):
                ans.append(node.val)
            else:
                ans[index] = node.val
            helper(node.left, index + 1)
            helper(node.right, index + 1)

        helper(root, 0)
        return ans


# TESTS
for tree, expected in [
    ("#", []),
    ("1,#,#", [1]),
    ("1,2,#,#,#", [1, 2]),
    ("1,2,#,5,#,#,3,#,4,#,#", [1, 3, 4]),
    ("1,2,5,#,#,#,3,#,#", [1, 3, 5]),
]:
    sol = Solution()
    actual = sol.rightSideView(TreeNode.deserialize(tree))
    print("Right side view of tree", tree, "->", actual)
    assert actual == expected

