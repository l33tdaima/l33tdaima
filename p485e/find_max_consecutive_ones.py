from typing import List

class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count, ans = 0, 0
        for n in nums:
            if n == 1:
                count += 1
                ans = max(ans, count)
            else:
                count = 0
        return ans
# TESTS
tests = [
    ([0,0,0,0,0,0], 0),
    ([1,0,1,1,1,0], 3),
    ([1,1,0,1,1,1], 3),
    ([1,1,1,1,1,1], 6)
]
for t in tests:
    sol = Solution()
    actual = sol.findMaxConsecutiveOnes(t[0])
    print("Max consecutive ones in", t[0], "->", actual)
    assert(actual == t[1])