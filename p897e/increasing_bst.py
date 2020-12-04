# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Tuple
from local_packages.binary_tree import TreeNode


class Solution:
    def increasingBSTV1(self, root: TreeNode) -> TreeNode:
        def helper(node: TreeNode) -> Tuple[TreeNode, TreeNode]:
            if not node:
                return None, None
            if node.left:
                head, ltail = helper(node.left)
                ltail.right, node.left = node, None
            else:
                head = node
            if node.right:
                node.right, rtail = helper(node.right)
            else:
                rtail = node
            return head, rtail

        head, _ = helper(root)
        return head

    def increasingBST(self, root: TreeNode, nxt: TreeNode = None) -> TreeNode:
        if not root:
            return nxt
        head = self.increasingBST(root.left, root)
        root.left = None
        root.right = self.increasingBST(root.right, nxt)
        return head


# TESTS
for tree, expected in [
    ("1,#,#", "1,#,#"),
    ("1,#,2,#,#", "1,#,2,#,#"),
    ("2,1,#,#,#", "1,#,2,#,#"),
    ("5,1,#,#,7,#,#", "1,#,5,#,7,#,#"),
    ("3,2,1,#,#,#,4,#,#,", "1,#,2,#,3,#,4,#,#"),
    ("6,#,8,7,#,#,9,#,#", "6,#,7,#,8,#,9,#,#"),
    ("5,3,2,1,#,#,#,4,#,#,6,#,8,7,#,#,9,#,#", "1,#,2,#,3,#,4,#,5,#,6,#,7,#,8,#,9,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.increasingBSTV1(TreeNode.deserialize(tree)))
    print("Increasing BST of", tree, "->", actual)
    assert actual == expected
    assert expected == TreeNode.serialize(sol.increasingBST(TreeNode.deserialize(tree)))
