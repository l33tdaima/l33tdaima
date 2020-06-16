# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from local_packages.binary_tree import TreeNode


class Solution:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        if not root:
            return None
        if root.val == val:
            return root
        elif val < root.val:
            return self.searchBST(root.left, val)
        else:
            return self.searchBST(root.right, val)


# TESTS
tests = [
    ["#", 0, None],
    ["1,#,#", 1, 1],
    ["4,2,1,#,#,3,#,#,7,#,#", 2, 2],
    ["4,2,1,#,#,3,#,#,7,#,#", 1, 1],
    ["4,2,1,#,#,3,#,#,7,#,#", 7, 7],
    ["4,2,1,#,#,3,#,#,7,#,#", 5, None],
]
for t in tests:
    sol = Solution()
    actual = sol.searchBST(TreeNode.deserialize(t[0]), t[1])
    print("Search", t[1], "in", t[0], "->", TreeNode.serialize(actual))
    if t[2] is None:
        assert actual is None
    else:
        assert actual.val == t[2]
