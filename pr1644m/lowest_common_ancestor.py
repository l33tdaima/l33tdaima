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
        found = 0

        def lca(root: "TreeNode", p: "TreeNode", q: "TreeNode") -> "TreeNode":
            nonlocal found
            if not root:
                return None

            l, r = lca(root.left, p, q), lca(root.right, p, q)
            if root == p or root == q:
                found += 1
                return root
            return root if l and r else (l or r)

        lca = lca(root, p, q)
        return lca if found == 2 else None
