# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List, Optional
from collections import defaultdict
from local_packages.binary_tree import TreeNode


class Solution:
    def findLeaves(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans = defaultdict(list)

        def helper(root: Optional[TreeNode]) -> int:
            if not root:
                return -1
            idx = 1 + max(helper(root.left), helper(root.right))
            ans[idx].append(root.val)
            return idx

        helper(root)
        return list(ans.values())


# TESTS
for tree, expected in [
    ("1,2,4,#,#,5,#,#,3,#,#", [[4, 5, 3], [2], [1]]),
    ("1,#,#", [[1]]),
]:
    sol = Solution()
    actual = sol.findLeaves(TreeNode.deserialize(tree))
    print("Find leaves of tree", tree, "->", actual)
    assert actual == expected
