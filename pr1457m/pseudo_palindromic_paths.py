# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def pseudoPalindromicPaths(self, root: TreeNode) -> int:
        ans = 0

        def helper(root: TreeNode, path: int) -> None:
            nonlocal ans
            if not root:
                return
            path ^= 1 << (root.val - 1)
            if not root.left and not root.right:
                if bin(path).count("1") <= 1:
                    ans += 1
            else:
                helper(root.left, path)
                helper(root.right, path)

        helper(root, 0)
        return ans


# TESTS
for tree, expected in [
    ("2,3,3,#,#,1,#,#,1,#,1,#,#", 2),
    ("2,1,1,#,#,3,#,1,#,#,1,#,#,", 1),
    ("9,#,#", 1),
]:
    sol = Solution()
    actual = sol.pseudoPalindromicPaths(TreeNode.deserialize(tree))
    print("# of pseudo-palindromic paths in", tree, "->", actual)
    assert actual == expected

