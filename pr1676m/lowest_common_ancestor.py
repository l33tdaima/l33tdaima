# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", nodes: "List[TreeNode]"
    ) -> "TreeNode":
        node_set = set(nodes)

        def lca(root: TreeNode) -> int:
            if not root:
                return 0
            if root in node_set:
                return root

            l, r = lca(root.left), lca(root.right)
            return root if l and r else l or r

        return lca(root)
