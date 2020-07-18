from typing import List
from heapq import nlargest
from collections import Counter
from itertools import chain


class Solution:
    def topKFrequentV1(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        topk = nlargest(k, counter.items(), lambda x: x[1])
        return [n for n, _ in topk]

    def topKFrequentV2(self, nums: List[int], k: int) -> List[int]:
        bucket = [[] for _ in range(len(nums) + 1)]
        for n, count in Counter(nums).items():
            bucket[count].append(n)
        return list(chain(*bucket))[::-1][:k]


# TESTS
tests = [
    ([1, 1, 1, 2, 2, 3], 2, [1, 2]),
    ([1], 1, [1]),
    ([1, 1, 1, 2, 2, 3, 9, 10, 9, 0, 19, 19, 35], 4, [1, 2, 9, 19]),
]
for t in tests:
    sol = Solution()
    actual = sol.topKFrequentV2(t[0], t[1])
    print(f"Top {t[1]} frequenct elements in {t[0]} -> {actual}")
    assert t[2] == sorted(actual)
    assert t[2] == sol.topKFrequentV1(t[0], t[1])
