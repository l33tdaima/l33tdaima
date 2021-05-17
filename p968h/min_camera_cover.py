# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode

NOT_COVERED, CAMERA, COVERED = 0, 1, 2


class Solution:
    def minCameraCover(self, root: TreeNode) -> int:
        ans = 0

        def dfs(node: TreeNode) -> int:
            nonlocal ans
            if not node:
                return COVERED
            l, r = dfs(node.left), dfs(node.right)
            if l == NOT_COVERED or r == NOT_COVERED:
                ans += 1
                return CAMERA
            elif l == CAMERA or r == CAMERA:
                return COVERED
            else:
                return NOT_COVERED

        return (dfs(root) == NOT_COVERED) + ans


# TESTS
for tree, expected in [
    ("0,0,0,#,#,0,#,#,#", 1),
    ("0,0,0,0,#,0,#,#,#,#,#", 2),
    ("0,#,#", 1),
    ("0,#,0,#,0,#,0,#,#", 2),
]:
    sol = Solution()
    actual = sol.minCameraCover(TreeNode.deserialize(tree))
    print("The minimum # of cameras to monitor", tree, "->", actual)
    assert actual == expected
