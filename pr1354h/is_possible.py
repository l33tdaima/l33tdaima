from typing import List
from heapq import heapify, heappush, heappop


class Solution:
    def isPossible(self, target: List[int]) -> bool:
        s = sum(target)
        heap = [-v for v in target]
        heapify(heap)
        while True:
            cur = -heappop(heap)
            s -= cur
            if cur == 1 or s == 1:  # s == 1 handles case like [1, 1000]
                return True
            if cur < s or s == 0 or cur % s == 0:
                return False
            heappush(heap, -(cur % s))  # A faster way then (cur - s)
            s += cur % s


# TESTS
for target, expected in [
    ([9, 3, 5], True),
    ([1, 1, 1, 2], False),
    ([8, 5], True),
    ([1, 100000], True),
]:
    sol = Solution()
    actual = sol.isPossible(target)
    print("Possible to create target", target, "->", actual)
    assert actual == expected
