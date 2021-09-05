from typing import List
from collections import defaultdict


class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
        tree = defaultdict(set)  # adjacency list of tree
        count = [1] * n  # counts all the nodes for subtree of node i as root
        ans = [0] * n
        for i, j in edges:
            tree[i].add(j)
            tree[j].add(i)

        def postOrder(root: int, parent: int) -> None:
            for i in tree[root]:
                if i != parent:
                    postOrder(i, root)
                    count[root] += count[i]
                    ans[root] += ans[i] + count[i]

        def preOrder(root: int, parent: int) -> None:
            for i in tree[root]:
                if i != parent:
                    ans[i] = ans[root] - count[i] + n - count[i]
                    preOrder(i, root)

        postOrder(0, -1)
        preOrder(0, -1)
        return ans


# TESTS
for n, edges, expected in [
    (6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]], [8, 12, 6, 10, 10, 10]),
    (1, [], [0]),
    (2, [[1, 0]], [1, 1]),
]:
    sol = Solution()
    actual = sol.sumOfDistancesInTree(n, edges)
    print("Sum of the distances for n =", n, ", edges =", edges, "->", actual)
    assert actual == expected
