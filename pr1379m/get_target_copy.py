# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from local_packages.binary_tree import TreeNode


class Solution:
    def getTargetCopyV1(
        self, original: TreeNode, cloned: TreeNode, target: TreeNode
    ) -> TreeNode:
        if not original or original is target:
            return cloned
        left = self.getTargetCopy(original.left, cloned.left, target)
        if left:
            return left
        return self.getTargetCopy(original.right, cloned.right, target)

    def getTargetCopyV2(
        self, original: TreeNode, cloned: TreeNode, target: TreeNode
    ) -> TreeNode:
        def iterator(node: TreeNode):
            if node:
                yield node
                yield from iterator(node.left)
                yield from iterator(node.right)

        for n1, n2 in zip(iterator(original), iterator(cloned)):
            if n1 is target:
                return n2
