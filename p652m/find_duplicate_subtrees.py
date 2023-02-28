# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import Optional
from collections import defaultdict


class Solution:
    def findDuplicateSubtrees(
        self, root: Optional[TreeNode]
    ) -> list[Optional[TreeNode]]:
        seen = defaultdict(list)

        def postorder(node: Optional[TreeNode]) -> None:
            if not node:
                return "#"
            serialized = (
                f"{node.val},{postorder(node.left)},{postorder(node.right)}"
            )
            seen[serialized].append(node)
            return serialized

        postorder(root)
        return [seen[key][0] for key in seen if len(seen[key]) > 1]


# TESTS
for tree, expected in [
    ("1,2,4,#,#,#,3,2,4,#,#,#,4,#,#", ["4,#,#", "2,4,#,#,#"]),
    ("2,1,#,#,1,#,#", ["1,#,#"]),
    ("2,2,3,#,#,#,2,3,#,#,#", ["3,#,#", "2,3,#,#,#"]),
]:
    sol = Solution()
    actual = [
        TreeNode.serialize(root)
        for root in sol.findDuplicateSubtrees(TreeNode.deserialize(tree))
    ]
    print("Find duplicate subtrees in", tree, "->", actual)
    assert actual == expected
