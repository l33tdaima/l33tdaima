class Solution:
    def largestPerimeter(self, nums: list[int]) -> int:
        ns = sorted(nums, reverse=True)
        for i in range(2, len(nums)):
            if ns[i] + ns[i - 1] > ns[i - 2]:
                return sum(ns[i - 2 : i + 1])
        return 0


# TESTS
for nums, expected in [
    ([2, 1, 2], 5),
    ([1, 2, 1], 0),
    ([3, 2, 3, 4], 10),
    ([3, 6, 2, 3], 8),
]:
    sol = Solution()
    actual = sol.largestPerimeter(nums)
    print("Largest perimeter in", nums, "->", actual)
    assert actual == expected
