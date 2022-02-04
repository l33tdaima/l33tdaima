class Solution:
    def findMaxLength(self, nums: list[int]) -> int:
        ans, count = 0, 0
        ht = {0: -1}  # count: first_index
        for i in range(len(nums)):
            count += nums[i] or -1
            if count in ht:
                ans = max(ans, i - ht[count])
            else:
                ht[count] = i
        return ans


# TESTS
for nums, expected in [
    [[1, 0], 2],
    [[0, 1, 0], 2],
    [[0, 1, 0, 0, 1], 4],
    [[0, 1, 0, 0, 1, 1, 0], 6],
    [[0, 0, 0, 0, 0, 0, 0], 0],
    [[1, 1, 1, 1, 1], 0],
]:
    sol = Solution()
    actual = sol.findMaxLength(nums)
    print("Max length of breakeven subarray in", nums, "->", actual)
    assert actual == expected
