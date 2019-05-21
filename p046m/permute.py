from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        return [[n] + p
                for i, n in enumerate(nums)
                for p in self.permute(nums[:i] + nums[i+1:])] or [[]]

tests = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
]
for t in tests:
    sol = Solution()
    print("Permutations in", t, "->", sol.permute(t))
