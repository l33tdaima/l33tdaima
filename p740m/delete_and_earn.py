class Solution:
    def deleteAndEarn(self, nums: list[int]) -> int:
        points, take, skip = [0] * 10001, 0, 0
        for n in nums:
            points[n] += n
        for v in range(10001):
            take, skip = skip + points[v], max(skip, take)
        return max(take, skip)


for nums, expected in [
    ([3, 4, 2], 6),
    ([2, 2, 3, 3, 3, 4], 9),
    ([10000], 10000),
]:
    sol = Solution()
    actual = sol.deleteAndEarn(nums)
    print("The maximum points can be earned from", nums, "->", actual)
    assert actual == expected
