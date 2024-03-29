from collections import Counter


class Solution:
    def findPairs(self, nums: list[int], k: int) -> int:
        ans, count = 0, Counter(nums)
        for n in count:
            if k == 0 and count[n] > 1 or k > 0 and n + k in count:
                ans += 1
        return ans


# TESTS
for nums, k, expected in [
    ([3, 1, 4, 1, 5], 2, 2),
    ([1, 2, 3, 4, 5], 1, 4),
    ([1, 3, 1, 5, 4], 0, 1),
    ([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3, 2),
    ([-1, -2, -3], 1, 2),
]:
    sol = Solution()
    actual = sol.findPairs(nums, k)
    print(f"The # of {k}-diff pairs in array", nums, "->", actual)
    assert actual == expected
