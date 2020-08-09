# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import defaultdict
from local_packages.binary_tree import TreeNode


class SolutionV1:  # O(n^2)
    def pathSumFrom(self, root: TreeNode, s: int) -> int:
        if root is None:
            return 0
        return (
            (1 if root.val == s else 0)
            + self.pathSumFrom(root.left, s - root.val)
            + self.pathSumFrom(root.right, s - root.val)
        )

    def pathSum(self, root: TreeNode, s: int) -> int:
        if root is None:
            return 0
        return (
            self.pathSumFrom(root, s)
            + self.pathSum(root.left, s)
            + self.pathSum(root.right, s)
        )


class SolutionV2:  # O(n)
    def pathSum(self, root: TreeNode, target: int) -> int:
        ans, seen = 0, defaultdict(int)

        def dfs(node: TreeNode, ps: int) -> None:
            nonlocal ans
            if node is None:
                return
            ps += node.val
            ans += seen[ps - target]
            seen[ps] += 1
            dfs(node.left, ps)
            dfs(node.right, ps)
            seen[ps] -= 1

        seen[0] = 1
        dfs(root, 0)
        return ans


# TESTS
tests = [
    ["#", 0, 0],
    ["1", 1, 1],
    ["10,5,3,3,#,#,-2,#,#,2,#,1,#,#,-3,#,11,#,#", 8, 3],
    ["1,-2,1,-1,#,#,3,#,#,-3,-2,#,#,#", -1, 4],
]
for t in tests:
    sol1 = SolutionV1()
    actual1 = sol1.pathSum(TreeNode.deserialize(t[0]), t[1])
    sol2 = SolutionV2()
    actual2 = sol2.pathSum(TreeNode.deserialize(t[0]), t[1])
    print("# of paths that sum to", t[1], "in", t[0], "->", actual2)
    assert actual1 == t[2]
    assert actual2 == t[2]
