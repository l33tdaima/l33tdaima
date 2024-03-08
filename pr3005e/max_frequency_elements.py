from collections import Counter


class Solution:
    def maxFrequencyElements(self, nums: list[int]) -> int:
        freq = Counter(nums)
        max_freq = max(freq.values())
        return sum([f for f in freq.values() if f == max_freq])


# TESTS
for nums, expected in [([1, 2, 2, 3, 1, 4], 4), ([1, 2, 3, 4, 5], 5)]:
    sol = Solution()
    actual = sol.maxFrequencyElements(nums)
    print("The total frequencies of max elements in", nums, "->", actual)
    assert actual == expected
