from itertools import accumulate
from bisect import bisect_right


class Solution:
    def answerQueries(self, nums: list[int], queries: list[int]) -> list[int]:
        psum = list(accumulate(sorted(nums)))
        return list(map(lambda q: bisect_right(psum, q), queries))


# TESTS
for nums, queries, expected in [
    ([4, 5, 2, 1], [3, 10, 21], [2, 3, 4]),
    ([2, 3, 4, 5], [1], [0]),
]:
    sol = Solution()
    actual = sol.answerQueries(nums, queries)
    print(
        "The maximum size of a subsequence for",
        queries,
        "in",
        nums,
        "->",
        actual,
    )
