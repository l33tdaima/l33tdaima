from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val: int = 0, left: "TreeNode" = None, right: "TreeNode" = None):
        self.val = val
        self.left = left
        self.right = right

    @classmethod
    def serialize(cls, root: "TreeNode") -> str:
        """Encodes a tree to a single string."""
        buffer = []

        def _serialize(root: "TreeNode"):
            if root is None:
                buffer.append("#")
                return
            buffer.append(str(root.val))
            _serialize(root.left)
            _serialize(root.right)

        _serialize(root)
        return ",".join(buffer)

    @classmethod
    def deserialize(cls, data: str) -> "TreeNode":
        """Decodes your encoded data to tree."""
        buffer = data.split(",")

        def _deserialize(buffer: List[str]):
            if len(buffer) == 0:
                return None
            val = buffer.pop(0)
            if val == "#" or val == "":
                return None
            node = TreeNode(int(val))
            node.left = _deserialize(buffer)
            node.right = _deserialize(buffer)
            return node

        return _deserialize(buffer)


if __name__ == "__main__":
    tests = [
        "#",
        "1,#,#",
        "1,2,#,#,#",
        "1,#,2,#,#",
        "1,2,#,#,3,#,#",
        "1,2,#,#,3,4,5,#,#,#,#",
    ]
    for t in tests:
        actual = TreeNode.serialize(TreeNode.deserialize(t))
        print("serialize(deserialize) ->", actual)
        assert t == TreeNode.serialize(TreeNode.deserialize(t))
