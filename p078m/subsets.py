class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        n, ans = len(nums), []
        for i in range(2 ** n):
            ans.append([nums[b] for b in range(n) if (i >> b) & 1])
        return ans


# TESTS
for t in [[], [1], [1, 2], [1, 2, 3]]:
    sol = Solution()
    print("Subsets of", t, "->\n", sol.subsets(t))
