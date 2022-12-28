from heapq import heapify, heappush, heappop


class Solution:
    def minStoneSum(self, piles: list[int], k: int) -> int:
        heap = [-p for p in piles]
        heapify(heap)
        while k > 0:
            op = -heappop(heap)
            heappush(heap, -(op - op // 2))
            k -= 1
        return -sum(heap)


# TESTS
for piles, k, expected in [
    ([5, 4, 9], 2, 12),
    ([4, 3, 6, 7], 3, 12),
]:
    sol = Solution()
    actual = sol.minStoneSum(piles, k)
    print("The minimum possible remaining of", piles, ", k =", k, "->", actual)
    assert actual == expected
