from collections import defaultdict


class Solution:
    def subarraySum(self, nums: list[int], k: int) -> int:
        sum_count = defaultdict(int)
        sum_count[0] = 1
        s, ans = 0, 0
        for n in nums:
            s += n
            ans += sum_count[s - k]
            sum_count[s] += 1
        return ans


# TESTS
for nums, k, expected in [
    ([1], 0, 0),
    ([1, 1, 1], 2, 2),
    ([1, 2, 3, 4, 5], 11, 0),
    ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4),
]:
    sol = Solution()
    actual = sol.subarraySum(nums, k)
    print("# of subarrays of", nums, "sum to", k, "->", actual)
    assert actual == expected
