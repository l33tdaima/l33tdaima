from collections import defaultdict


class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:
        seen, ans = defaultdict(int), 0
        for n in nums:
            if k - n in seen and seen[k - n] > 0:
                ans += 1
                seen[k - n] -= 1
            else:
                seen[n] += 1
        return ans


# TESTS
for nums, k, expected in [
    ([1, 2, 3, 4], 5, 2),
    ([3, 1, 3, 4, 3], 6, 1),
]:
    sol = Solution()
    actual = sol.maxOperations(nums, k)
    print(f"The max number of {k}-sum pairs in {nums} ->", actual)
    assert actual == expected
