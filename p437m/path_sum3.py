# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from collections import defaultdict
from local_packages.binary_tree import TreeNode


class SolutionV1:  # O(n^2)
    def pathSumFrom(self, root: Optional[TreeNode], s: int) -> int:
        if root is None:
            return 0
        return (
            (1 if root.val == s else 0)
            + self.pathSumFrom(root.left, s - root.val)
            + self.pathSumFrom(root.right, s - root.val)
        )

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        if root is None:
            return 0
        return (
            self.pathSumFrom(root, targetSum)
            + self.pathSum(root.left, targetSum)
            + self.pathSum(root.right, targetSum)
        )


class SolutionV2:  # O(n)
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        ans, seen = 0, defaultdict(int)

        def dfs(node: Optional[TreeNode], pathsum: int) -> None:
            nonlocal ans
            if node is None:
                return
            pathsum += node.val
            ans += seen[pathsum - targetSum]
            seen[pathsum] += 1
            dfs(node.left, pathsum)
            dfs(node.right, pathsum)
            seen[pathsum] -= 1

        seen[0] = 1
        dfs(root, 0)
        return ans


# TESTS
for tree, targetSum, expected in [
    ["10,5,3,3,#,#,-2,#,#,2,#,1,#,#,-3,#,11,#,#", 8, 3],
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,5,#,#,1,#,#", 22, 3],
    ["#", 0, 0],
    ["1", 1, 1],
    ["1,-2,1,-1,#,#,3,#,#,-3,-2,#,#,#", -1, 4],
]:
    sol1 = SolutionV1()
    actual1 = sol1.pathSum(TreeNode.deserialize(tree), targetSum)
    sol2 = SolutionV2()
    actual2 = sol2.pathSum(TreeNode.deserialize(tree), targetSum)
    print("# of paths that sum to", targetSum, "in", tree, "->", actual2)
    assert actual1 == expected
    assert actual2 == expected
