class Solution:
    def find132pattern(self, nums: list[int]) -> bool:
        stack, s3 = [], float("-Inf")
        for s1 in nums[::-1]:
            if s1 < s3:
                return True
            while len(stack) > 0 and s1 > stack[-1]:
                s3 = stack.pop()
            stack.append(s1)
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
