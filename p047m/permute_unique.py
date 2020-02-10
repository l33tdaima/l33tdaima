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
tests = [[3, 3], [1, 2, 1], [2, 2, 1]]
for t in tests:
    sol = Solution()
    print("Unique permutation of", t, "->", sol.permuteUnique(t), "\n")
