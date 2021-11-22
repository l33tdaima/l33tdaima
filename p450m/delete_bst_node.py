from local_packages.binary_tree import TreeNode

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMin(self, root: TreeNode) -> int:
        while root.left != None:
            root = root.left
        return root.val

    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        if root is None:
            return root
        if key < root.val:
            root.left = self.deleteNode(root.left, key)
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:  # found the key
            if root.left is None:
                return root.right
            if root.right is None:
                return root.left
            min_val = self.findMin(root.right)
            root.val = min_val
            root.right = self.deleteNode(root.right, min_val)
        return root


# TESTS
for tree, key, expected in [
    ["#", 1, "#"],
    ["1,#,#", 2, "1,#,#"],
    ["1,#,#", 1, "#"],
    ["1,#,2,#,#", 1, "2,#,#"],
    ["2,1,#,#,3,#,#", 2, "3,1,#,#,#"],
    ["2,1,#,#,3,#,#", 3, "2,1,#,#,#"],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 3, "5,4,2,#,#,#,6,#,7,#,#"],
]:
    sol = Solution()
    actual = TreeNode.serialize(
        sol.deleteNode(TreeNode.deserialize(tree), key)
    )
    print("Delete", key, "from", tree, "->", actual)
    assert actual == expected
