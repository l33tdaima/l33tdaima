from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n, ans = len(nums), []
        for i in range(2 ** n):
            ans.append([nums[b] for b in range(n) if (i >> b) & 1])
        return ans


# TESTS
tests = [[], [1], [1, 2], [1, 2, 3]]
for t in tests:
    sol = Solution()
    print("Subsets of", t, "->\n", sol.subsets(t))
