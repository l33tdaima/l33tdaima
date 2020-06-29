from typing import List
from collections import defaultdict
from heapq import heappush, heappop


class Solution:
    def findItineraryV1(self, tickets: List[List[str]]) -> List[str]:
        graph = defaultdict(list)
        for src, dest in tickets:
            heappush(graph[src], dest)
        # print(f"{graph}")
        route = []

        def dfs(src: str) -> None:
            while graph[src]:
                dfs(heappop(graph[src]))
            route.append(src)

        dfs("JFK")
        return route[::-1]

    def findItineraryV2(self, tickets):
        graph = defaultdict(list)
        for a, b in sorted(tickets)[::-1]:
            graph[a].append(b)
        # print(graph)
        route = []

        def dfs(src: str) -> None:
            while graph[src]:
                dfs(graph[src].pop())
            route.append(src)

        dfs("JFK")
        return route[::-1]


# TESTS
tests = [
    ([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]], []),
    (
        [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]],
        ["JFK", "MUC", "LHR", "SFO", "SJC"],
    ),
    (
        [
            ["JFK", "SFO"],
            ["JFK", "ATL"],
            ["SFO", "ATL"],
            ["ATL", "JFK"],
            ["ATL", "SFO"],
        ],
        ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"],
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.findItineraryV2(t[0])
    print("Find itinerary ->", actual)
