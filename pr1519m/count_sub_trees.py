from collections import defaultdict, Counter


class Solution:
    def countSubTrees(
        self, n: int, edges: list[list[int]], labels: str
    ) -> list[int]:
        def dfs(node: int, prev: int) -> Counter:
            counter = Counter(labels[node])
            for neighbor in graph[node]:
                if neighbor != prev:
                    counter += dfs(neighbor, node)
            # print(node, prev, counter)
            ans[node] = counter[labels[node]]
            return counter

        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        ans = [0 for _ in labels]
        dfs(0, -1)
        return ans


# TESTS
for n, edges, labels, expected in [
    (
        7,
        [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]],
        "abaedcd",
        [2, 1, 1, 1, 1, 1, 1],
    ),
    (4, [[0, 1], [1, 2], [0, 3]], "bbbb", [4, 2, 1, 1]),
    (5, [[0, 1], [0, 2], [1, 3], [0, 4]], "aabab", [3, 2, 1, 1, 1]),
]:
    sol = Solution()
    actual = sol.countSubTrees(n, edges, labels)
    print("Number of Nodes in the Sub-Tree with labels", labels, "->", actual)
    assert actual == expected
