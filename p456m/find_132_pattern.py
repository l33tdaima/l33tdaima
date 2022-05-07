class Solution:
    def find132pattern(self, nums: list[int]) -> bool:
        stack, s3 = [], float("-Inf")
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] < s3:
                return True
            while len(stack) > 0 and nums[i] > stack[-1]:
                s3 = stack.pop()
            stack.append(nums[i])
        return False


# TESTS
for nums, expected in [
    ([1, 2, 3, 4], False),
    ([3, 1, 4, 2], True),
    ([-1, 3, 2, 0], True),
    ([9, 11, 8, 9, 10, 7, 9], True),
]:
    sol = Solution()
    actual = sol.find132pattern(nums)
    print("There is 132 pattern in", nums, "->", actual)
    assert actual == expected
