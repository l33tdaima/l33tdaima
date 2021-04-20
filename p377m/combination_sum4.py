from typing import List


class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        memo = {0: 1}

        def f(target: int) -> int:
            if target in memo:
                return memo[target]
            v = sum(f(target - n) for n in nums if target - n >= 0)
            memo[target] = v
            return v

        return f(target)


# TESTS
for nums, target, expected in [
    ([1, 2, 3], 4, 7),
    ([9], 3, 0),
    ([4, 2, 1], 32, 39882198),
]:
    sol = Solution()
    actual = sol.combinationSum4(nums, target)
    print("# of possible combinations adds up to", target, "in", nums, "->", actual)
