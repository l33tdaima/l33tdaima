from typing import List


class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count, ans = 0, 0
        for n in nums:
            if n == 1:
                count += 1
                ans = max(ans, count)
            else:
                count = 0
        return ans


# TESTS
for nums, expected in [
    ([0, 0, 0, 0, 0, 0], 0),
    ([1, 0, 1, 1, 1, 0], 3),
    ([1, 1, 0, 1, 1, 1], 3),
    ([1, 0, 1, 1, 0, 1], 2),
    ([1, 1, 1, 1, 1, 1], 6),
]:
    sol = Solution()
    actual = sol.findMaxConsecutiveOnes(nums)
    print("Max consecutive ones in", nums, "->", actual)
    assert actual == expected
