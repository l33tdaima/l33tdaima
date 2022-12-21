from collections import defaultdict


class Solution:
    def possibleBipartition(self, n: int, dislikes: list[list[int]]) -> bool:
        graph = defaultdict(list)
        for a, b in dislikes:
            graph[a].append(b)
            graph[b].append(a)

        RED, _ = 0, 1
        color = dict()

        def dfs(person: int, c: int) -> bool:
            if person in color:
                return color[person] == c
            color[person] = c
            return all(dfs(nb, c ^ 1) for nb in graph[person])

        return all(dfs(p, RED) for p in range(1, n + 1) if p not in color)


# TESTS
for n, dislikes, expected in [
    (4, [[1, 2], [1, 3], [2, 4]], True),
    (3, [[1, 2], [1, 3], [2, 3]], False),
    (5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], False),
]:
    sol = Solution()
    actual = sol.possibleBipartition(n, dislikes)
    print("Possible bipartition in", dislikes, "->", actual)
    assert actual == expected
