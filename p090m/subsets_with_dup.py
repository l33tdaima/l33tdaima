from typing import List


class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        ans = []
        nums_sorted = sorted(nums)

        def backtrack(wip: List[int], start: int) -> None:
            ans.append(list(wip))
            for i in range(start, len(nums)):
                if i > start and nums_sorted[i] == nums_sorted[i - 1]:
                    continue
                wip.append(nums_sorted[i])
                backtrack(wip, i + 1)
                wip.pop()

        backtrack([], 0)
        return ans


# TESTS
for nums, expected in [
    ([1, 2, 2], [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]),
    ([0], [[], [0]]),
]:
    sol = Solution()
    actual = sol.subsetsWithDup(nums)
    print("Subsets with dups of", nums, "->", actual)
    assert actual == expected
