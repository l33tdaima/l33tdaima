# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from local_packages.binary_tree import TreeNode


class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        if p.val > q.val:
            return self.lowestCommonAncestor(root, q, p)
        if p.val <= root.val <= q.val:
            return root
        elif root.val > q.val:
            return self.lowestCommonAncestor(root.left, p, q)
        else:
            return self.lowestCommonAncestor(root.right, p, q)


# TESTS
for tree, p, q, expected in [
    ("6,2,0,#,#,4,3,#,#,5,#,#,8,7,#,#,9,#,#", TreeNode(2), TreeNode(8), 6),
    ("6,2,0,#,#,4,3,#,#,5,#,#,8,7,#,#,9,#,#", TreeNode(2), TreeNode(4), 2),
    ("6,2,0,#,#,4,3,#,#,5,#,#,8,7,#,#,9,#,#", TreeNode(7), TreeNode(9), 8),
    ("2,1,#,#,#", TreeNode(2), TreeNode(1), 2),
]:
    sol = Solution()
    actual = sol.lowestCommonAncestor(TreeNode.deserialize(tree), p, q).val
    print("LCA of", tree, ", p =", p.val, ", q =", q.val, "->", actual)
    assert actual == expected
