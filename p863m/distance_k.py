# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from local_packages.binary_tree import TreeNode
from collections import defaultdict


class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> list[int]:
        graph = defaultdict(list)

        def build_graph(node: TreeNode, parent: TreeNode) -> None:
            if node and parent:
                graph[node.val].append(parent.val)
                graph[parent.val].append(node.val)
            if node.left:
                build_graph(node.left, node)
            if node.right:
                build_graph(node.right, node)

        build_graph(root, None)

        ans = []
        visited = set([target.val])

        def dfs(curr: int, distance: int) -> None:
            if distance == k:
                ans.append(curr)
                return
            for neighbor in graph[curr]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor, distance + 1)

        dfs(target.val, 0)
        return ans
