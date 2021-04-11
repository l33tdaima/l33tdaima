# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def deepest(self, root: TreeNode) -> int:
        if not root:
            return 0
        return 1 + max(self.deepest(root.left), self.deepest(root.right))

    def helper(self, root: TreeNode, depth: int, max_depth: int) -> int:
        if not root:
            return 0
        if not root.left and not root.right and depth == max_depth:
            return root.val
        return self.helper(root.left, depth + 1, max_depth) + self.helper(
            root.right, depth + 1, max_depth
        )

    def deepestLeavesSumDFS(self, root: TreeNode) -> int:
        deepest = self.deepest(root)
        return self.helper(root, 1, deepest)

    def deepestLeavesSumBFS(self, root: TreeNode) -> int:
        queue = [root]
        while queue:
            preq, queue = (
                queue,
                [child for n in queue for child in [n.left, n.right] if child],
            )
        return sum(n.val for n in preq)


# TESTS
for tree, expected in [
    ("1,#,#", 1),
    ("1,2,#,#,#", 2),
    ("1,#,3,#,#", 3),
    ("1,2,#,#,3,#,#", 5),
    ("1,2,4,7,#,#,#,5,#,#,3,#,6,#,8,#,#", 15),
    ("6,7,2,9,#,#,#,7,1,#,#,4,#,#,8,1,#,#,3,#,5,#,#", 19),
]:
    sol = Solution()
    root = TreeNode.deserialize(tree)
    actual = sol.deepestLeavesSumBFS(root)
    print("The sum of deepest leaves of", tree, "->", actual)
    assert actual == expected
    assert expected == sol.deepestLeavesSumDFS(root)
