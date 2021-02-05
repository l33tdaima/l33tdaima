from typing import List
from collections import Counter


class Solution:
    def findLHS(self, nums: List[int]) -> int:
        ans, counter = 0, Counter(nums)
        for n in counter:
            if n + 1 in counter:
                ans = max(ans, counter[n] + counter[n + 1])
        return ans


for nums, expected in [
    ([1, 3, 2, 2, 5, 2, 3, 7], 5),
    ([1, 2, 3, 4], 2),
    ([1, 1, 1, 1], 0),
]:
    sol = Solution()
    actual = sol.findLHS(nums)
    print("The longest harmonious subsequence in", nums, "->", actual)
    assert actual == expected
