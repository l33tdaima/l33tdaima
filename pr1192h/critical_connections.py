from typing import List, Dict
from collections import defaultdict


class Solution:
    def criticalConnections(
        self, n: int, connections: List[List[int]]
    ) -> List[List[int]]:
        def makeGraph(connections: List[List[int]]) -> Dict[int, List[int]]:
            graph = defaultdict(list)
            for s, e in connections:
                graph[s].append(e)
                graph[e].append(s)
            return graph

        graph = makeGraph(connections)
        cconns, rank = set(map(tuple, (map(sorted, connections)))), [-2] * n

        def dfs(node: int, depth: int) -> int:
            if rank[node] >= 0:  # visiting (0<=rank<n), or visited (rank=n)
                return rank[node]
            rank[node], min_back_depth = depth, n
            for neighbor in graph[node]:
                if rank[neighbor] == depth - 1:
                    continue  # don't immmediately go back to parent. that's why i didn't choose -1 as the special value, in case depth==0.
                back_depth = dfs(neighbor, depth + 1)
                if back_depth <= depth:
                    cconns.discard(tuple(sorted((node, neighbor))))
                min_back_depth = min(min_back_depth, back_depth)
            return min_back_depth

        dfs(0, 0)
        return list(cconns)


# TESTS
for n, connections, expected in [
    (4, [[0, 1], [1, 2], [2, 0], [1, 3]], [(1, 3)]),
]:
    sol = Solution()
    actual = sol.criticalConnections(n, connections)
    print("All critical connections in the network", connections, "->", actual)
    assert actual == expected
