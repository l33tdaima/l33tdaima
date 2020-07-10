from local_packages.binary_tree import TreeNode

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        if root is None:
            return 0
        ans, queue = 0, [(root, 0)]
        while queue:
            ans = max(ans, queue[-1][1] - queue[0][1] + 1)
            for i in range(len(queue)):
                node, n = queue.pop(0)
                if node.left:
                    queue.append((node.left, n * 2))
                if node.right:
                    queue.append((node.right, n * 2 + 1))
        return ans


# TESTS
tests = [
    ("#", 0),
    ("1,3,5,#,#,3,#,#,2,#,9,#,#", 4),
    ("1,3,5,#,#,3,#,#,#", 2),
    ("1,3,5,#,#,#,2,#,#", 2),
    ("1,3,5,6,#,#,#,#,2,#,9,#,7,#,#", 8),
]
for t in tests:
    sol = Solution()
    actual = sol.widthOfBinaryTree(TreeNode.deserialize(t[0]))
    print("Width of tree", t[0], "->", actual)
