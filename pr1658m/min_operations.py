from typing import List


class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        if target == 0:
            return len(nums)
        ans, s, smap = 0, 0, {0: -1}
        for i, n in enumerate(nums):
            s += n
            if s - target in smap:
                ans = max(ans, i - smap[s - target])
            smap[s] = i
        return len(nums) - ans if ans else -1


# TESTS
for nums, x, expected in [
    ([1, 1, 4, 2, 3], 5, 2),
    ([5, 6, 7, 8, 9], 4, -1),
    ([3, 2, 20, 1, 1, 3], 10, 5),
    ([4, 2, 1, 3], 10, 4),
]:
    sol = Solution()
    actual = sol.minOperations(nums, x)
    print("The minimum operations in", nums, "to reduce", x, "to zero ->", actual)
    assert actual == expected
