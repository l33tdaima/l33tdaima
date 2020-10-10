# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from typing import List
from local_packages.binary_tree import TreeNode


class Codec:
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        buffer = []

        def _serialize(node: "TreeNode") -> None:
            if node is None:
                return
            buffer.append(str(node.val))
            _serialize(node.left)
            _serialize(node.right)

        _serialize(root)
        return ",".join(buffer)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        if len(data) == 0:
            return None
        buffer = list(map(int, data.split(",")))

        def _deserialize(buffer: List[str], lower: int, upper: int) -> "TreeNode":
            if len(buffer) == 0:
                return None
            if buffer[0] < lower or buffer[0] > upper:
                return None
            val = buffer.pop(0)
            root = TreeNode(val)
            root.left = _deserialize(buffer, lower, val)
            root.right = _deserialize(buffer, val, upper)
            return root

        return _deserialize(buffer, float("-Inf"), float("Inf"))


# TESTS
tests = [
    "#",
    "1,#,#",
    "2,1,#,#,#",
    "2,#,3,#,#",
    "2,1,#,#,3,#,#",
    "5,3,1,#,#,4,#,#,7,#,9,#,#",
]
for t in tests:
    codec = Codec()
    actual = codec.serialize(TreeNode.deserialize(t))
    print("BST serialize", t, "->", actual)
    assert actual == codec.serialize(codec.deserialize(actual))
