from typing import List


class Solution:
    def rotateV1(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        N, k = len(nums), k % len(nums)
        for i in range((N - k) // 2):
            nums[i], nums[N - k - 1 - i] = nums[N - k - 1 - i], nums[i]
        for i in range(1, k // 2 + 1):
            nums[-i], nums[-(k + 1 - i)] = nums[-(k + 1 - i)], nums[-i]
        nums.reverse()

    def rotateV2(self, nums: List[int], k: int) -> None:
        k = k % len(nums)
        if not k:
            return
        nums[:k], nums[k:] = nums[-k:], nums[:-k]


# TESTS
tests = [
    ([1, 2, 3, 4, 5, 6, 7], 0, [1, 2, 3, 4, 5, 6, 7]),
    ([1, 2, 3, 4, 5, 6, 7], 1, [7, 1, 2, 3, 4, 5, 6]),
    ([1, 2, 3, 4, 5, 6, 7], 2, [6, 7, 1, 2, 3, 4, 5]),
    ([1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]),
    ([1, 2, 3, 4, 5, 6, 7], 11, [4, 5, 6, 7, 1, 2, 3]),
    ([-1, -100, 3, 99], 2, [3, 99, -1, -100]),
]
for nums, k, expected in tests:
    sol = Solution()
    print("Rotate", nums, "to the right by", k, "steps ->")
    sol.rotateV2(nums, k)
    print("  ", nums)
    assert nums == expected

