class Solution:
    def sortArrayByParity(self, nums: list[int]) -> list[int]:
        even, odd = [], []
        for a in nums:
            if a & 1:
                odd.append(a)
            else:
                even.append(a)
        return even + odd

    def sortArrayByParityInPlace(self, nums: list[int]) -> list[int]:
        e, o = 0, 0
        while o < len(nums):
            if not (nums[o] & 1):
                nums[e], nums[o] = nums[o], nums[e]
                e += 1
            o += 1
        return nums


# TESTS
for nums, expected in [
    ([3, 1, 2, 4], [2, 4, 3, 1]),
    ([3, 1], [3, 1]),
    ([2, 4], [2, 4]),
]:
    sol = Solution()
    actual = sol.sortArrayByParity(nums)
    assert actual == expected
    print("Sort by partiy ->", sol.sortArrayByParityInPlace(nums))
