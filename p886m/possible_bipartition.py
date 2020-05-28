from typing import List
from collections import defaultdict


class Solution:
    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:
        graph = defaultdict(list)
        for a, b in dislikes:
            graph[a].append(b)
            graph[b].append(a)

        RED, BLUE = 0, 1
        color = dict()

        def dfs(person: int, c: int) -> bool:
            if person in color:
                return color[person] == c
            color[person] = c
            return all(dfs(nb, c ^ 1) for nb in graph[person])

        return all(dfs(n, RED) for n in range(1, N + 1) if n not in color)


# TESTS
tests = [
    {"N": 4, "dislikes": [[1, 2], [1, 3], [2, 4]], "expected": True},
    {"N": 3, "dislikes": [[1, 2], [1, 3], [2, 3]], "expected": False},
    {
        "N": 5,
        "dislikes": [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]],
        "expected": False,
    },
]
for t in tests:
    sol = Solution()
    actual = sol.possibleBipartition(t["N"], t["dislikes"])
    print("Possible bipartition in", t["dislikes"], "->", actual)
    assert actual == t["expected"]
