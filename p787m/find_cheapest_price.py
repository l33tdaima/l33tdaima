from typing import List
from collections import defaultdict
import heapq


class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, K: int
    ) -> int:
        graph = defaultdict(dict)
        for s, d, p in flights:
            graph[s][d] = p
        heap = [(0, src, -1)]  # cost, city, stops
        while heap:
            cost, city, stops = heapq.heappop(heap)
            if city == dst:
                return cost
            if stops < K:
                for nc in graph[city]:
                    heapq.heappush(
                        heap, (graph[city][nc] + cost, nc, stops + 1)
                    )
        return -1


# TESTS
tests = [
    {
        "n": 3,
        "edges": [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
        "src": 0,
        "dst": 2,
        "k": 1,
        "expected": 200,
    },
    {
        "n": 3,
        "edges": [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
        "src": 0,
        "dst": 2,
        "k": 0,
        "expected": 500,
    },
    {
        "n": 5,
        "edges": [
            [0, 1, 5],
            [1, 2, 5],
            [0, 3, 2],
            [3, 1, 2],
            [1, 4, 1],
            [4, 2, 1],
        ],
        "src": 0,
        "dst": 2,
        "k": 2,
        "expected": 7,
    },
]
for t in tests:
    sol = Solution()
    actual = sol.findCheapestPrice(
        t["n"], t["edges"], t["src"], t["dst"], t["k"]
    )
    print(
        f"The cheapest price from city {t['src']} to city {t['dst']} with at most {t['k']} stop costs -> {actual}"
    )
    assert actual == t["expected"]
