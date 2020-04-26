from typing import List


class Solution:
    def canJumpON2(self, nums: List[int]) -> bool:
        N = len(nums)
        reachable = [False] * N
        reachable[0] = True
        for i in range(N - 1):
            if not reachable[i]:
                continue
            for j in range(1, nums[i] + 1):
                if i + j < N:
                    reachable[i + j] = True
        return reachable[-1]

    def canJumpON(self, nums: List[int]) -> bool:
        canreach = 0
        for i, n in enumerate(nums):
            if i > canreach:
                return False
            canreach = max(i + n, canreach)
        return True


# TESTS
tests = [
    ([1], True),
    ([1, 2], True),
    ([1, 0, 1], False),
    ([2, 3, 1, 1, 4], True),
    ([3, 2, 1, 0, 4], False),
    ([3, 2, 2, 0, 4], True),
]
for t in tests:
    sol = Solution()
    actual = sol.canJumpON(t[0])
    print("Can jump in", t[0], "->", actual)
    assert actual == t[1]
