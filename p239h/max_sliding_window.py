from typing import List
from collections import deque


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        d, ans = deque(), []
        for i, n in enumerate(nums):
            while d and nums[d[-1]] < n:
                d.pop()
            d.append(i)
            if d[0] == i - k:
                d.popleft()
            if i >= k - 1:
                ans.append(nums[d[0]])
        return ans


# TESTS
for nums, k, expected in [
    ([1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]),
    ([1], 1, [1]),
    ([1, -1], 1, [1, -1]),
    ([9, 11], 2, [11]),
    ([4, -2], 2, [4]),
]:
    sol = Solution()
    actual = sol.maxSlidingWindow(nums, k)
    print("Max of sliding window of k =", k, "in", nums, "->", actual)
    assert actual == expected
