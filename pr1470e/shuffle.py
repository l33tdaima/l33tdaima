class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        i = n - 1
        for j in range(2 * n - 1, n - 1, -1):
            nums[j] <<= 10
            nums[j] |= nums[i]
            i -= 1
        i = 0
        for j in range(n, 2 * n):
            n1 = nums[j] & 1023
            n2 = nums[j] >> 10
            nums[i], nums[i + 1] = n1, n2
            i += 2
        return nums


# TESTS
for nums, n, expected in [
    ([2, 5, 1, 3, 4, 7], 3, [2, 3, 5, 4, 1, 7]),
    ([1, 2, 3, 4, 4, 3, 2, 1], 4, [1, 4, 2, 3, 3, 2, 4, 1]),
    ([1, 1, 2, 2], 2, [1, 2, 1, 2]),
]:
    sol = Solution()
    actual = sol.shuffle(nums, n)
    assert actual == expected
