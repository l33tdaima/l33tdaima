from typing import List


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        ans = []
        visited = [False] * len(nums)
        nums.sort()

        def backtrack(wip: List[int]):
            if len(wip) == len(nums):
                ans.append(list(wip))
                return
            for i in range(len(nums)):
                if visited[i]:
                    continue
                if i > 0 and nums[i] == nums[i - 1] and not visited[i - 1]:
                    continue
                wip.append(nums[i])
                visited[i] = True
                backtrack(wip)
                visited[i] = False
                wip.pop()

        backtrack([])
        return ans


# TESTS
for nums, expected in [
    ([3, 3], [[3, 3]]),
    ([1, 2, 1], [[1, 1, 2], [1, 2, 1], [2, 1, 1]]),
    ([1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]),
]:
    sol = Solution()
    actual = sol.permuteUnique(nums)
    print("Unique permutation of", nums, "->", actual)
    assert actual == expected
