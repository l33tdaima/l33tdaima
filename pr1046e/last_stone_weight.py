import heapq


class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        h = [-n for n in stones]
        heapq.heapify(h)
        while len(h) > 1 and h[0] != 0:
            heapq.heappush(h, heapq.heappop(h) - heapq.heappop(h))
        return -h[0]


# TESTS
for stones, expected in [
    ([2, 7, 4, 1, 8, 1], 1),
    ([1], 1),
    ([1, 2, 3], 0),
]:
    sol = Solution()
    actual = sol.lastStoneWeight(stones)
    print("Last stone weight in", stones, "->", actual)
    assert actual == expected
