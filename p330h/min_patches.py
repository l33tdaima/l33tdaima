from typing import List


class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        rng, patches, i = 0, 0, 0
        while rng < n:
            if i < len(nums) and nums[i] <= rng + 1:
                rng, i = rng + nums[i], i + 1
            else:
                rng += rng + 1
                patches += 1
        return patches


# TESTS
for nums, n, expected in [
    ([1, 3], 6, 1),
    ([1, 5, 10], 20, 2),
    ([1, 2, 2], 5, 0),
    ([1, 2, 4, 13, 43], 100, 2),
]:
    sol = Solution()
    actual = sol.minPatches(nums, n)
    print("The mininum patches required for", nums, "and", n, "->", actual)
    assert actual == expected
