# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from local_packages.binary_tree import TreeNode


class Solution:
    def depth(self, node: Optional[TreeNode]) -> int:
        return 1 + self.depth(node.left) if node else 0

    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        left_depth = self.depth(root.left)
        right_depth = self.depth(root.right)
        if left_depth == right_depth:
            return pow(2, left_depth) + self.countNodes(root.right)
        else:
            return pow(2, right_depth) + self.countNodes(root.left)

    def countNodesIter(self, root: Optional[TreeNode]) -> int:
        ans, depth = 0, self.depth(root)
        while root:
            rdepth = self.depth(root.right)
            ans += pow(2, rdepth)
            if rdepth == depth - 1:
                root = root.right
            else:
                root = root.left
            depth -= 1
        return ans


# TESTS
for tree, expected in [
    ("#", 0),
    ("1,#,#", 1),
    ("1,2,4,#,#,#,3,#,#", 4),
    ("1,2,4,#,#,5,#,#,3,6,#,#,#", 6),
    ("1,2,4,#,#,5,#,#,3,6,#,#,7,#,#", 7),
]:
    sol = Solution()
    root = TreeNode.deserialize(tree)
    actual = sol.countNodes(root)
    print("Count nodes in", tree, "->", actual)
    assert actual == expected
    assert expected == sol.countNodesIter(root)
