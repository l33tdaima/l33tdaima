# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode


class Solution:
    def pruneTreeV1(self, root: TreeNode) -> TreeNode:
        def not_contain_1(root: TreeNode) -> bool:
            if not root:
                return True
            if left_not_contain_1 := not_contain_1(root.left):
                root.left = None
            if right_not_contain_1 := not_contain_1(root.right):
                root.right = None
            return left_not_contain_1 and right_not_contain_1 and root.val == 0

        return None if not_contain_1(root) else root

    def pruneTreeV2(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        root.left = self.pruneTree(root.left)
        root.right = self.pruneTree(root.right)
        if not root.left and not root.right and not root.val:
            return None
        return root


# TESTS
for tree, expected in [
    ("1,#,0,0,#,#,1,#,#", "1,#,0,#,1,#,#"),
    ("1,0,0,#,#,0,#,#,1,0,#,#,1,#,#", "1,#,1,#,1,#,#"),
    ("1,1,1,0,#,#,#,1,#,#,0,0,#,#,1,#,#", "1,1,1,#,#,1,#,#,0,#,1,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.pruneTree(TreeNode.deserialize(tree)))
    print("Prune subtree non containing 1 from", tree, "->", actual)
    assert actual == expected
