from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        ans = 0
        for n in nums:
            if n != val:
                nums[ans] = n
                ans += 1
        return ans


# TESTS
tests = [
    [[], 0, []],
    [[3, 2, 2, 3], 3, [2, 2]],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 3, 0, 4]],
]
for t in tests:
    sol = Solution()
    n = sol.removeElement(t[0], t[1])
    assert t[0][:n] == t[2]
