from typing import List


class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        ans, count = 0, 0
        ht = {0: -1}
        for i in range(len(nums)):
            count += nums[i] or -1
            if count in ht:
                ans = max(ans, i - ht[count])
            else:
                ht[count] = i
        return ans


# TESTS
tests = [
    [[1, 0], 2],
    [[0, 1, 0], 2],
    [[0, 1, 0, 0, 1], 4],
    [[0, 1, 0, 0, 1, 1, 0], 6],
    [[0, 0, 0, 0, 0, 0, 0], 0],
    [[1, 1, 1, 1, 1], 0],
]
for t in tests:
    sol = Solution()
    actual = sol.findMaxLength(t[0])
    print("Max length of breakeven subarray in", t[0], "->", actual)
    assert actual == t[1]
