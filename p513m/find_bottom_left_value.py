# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from local_packages.binary_tree import TreeNode


class Solution:
    def findBottomLeftValueV1(self, root: Optional[TreeNode]) -> int:
        queue = [root]
        while queue:
            nqueue = []
            for node in queue:
                if node.left:
                    nqueue.append(node.left)
                if node.right:
                    nqueue.append(node.right)
            if not nqueue:
                return queue[0].val
            else:
                queue = nqueue

    def findBottomLeftValueV2(self, root: Optional[TreeNode]) -> int:
        queue = [root]
        for node in queue:
            queue += filter(None, (node.right, node.left))
        return node.val


# TESTS
for tree, expected in [
    ("2,1,#,#,3,#,#", 1),
    ("1,2,4,#,#,#,3,5,7,#,#,#,6,#,#", 7),
]:
    sol = Solution()
    actual = sol.findBottomLeftValueV2(TreeNode.deserialize(tree))
    print("The bottom left value of tree", tree, "->", actual)
    assert actual == expected
