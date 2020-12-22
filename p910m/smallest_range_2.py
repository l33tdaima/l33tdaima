from typing import List


class Solution:
    def smallestRangeII(self, A: List[int], K: int) -> int:
        B = sorted(A)
        ans = B[-1] - B[0]
        lmin, rmax = B[0] + K, B[-1] - K
        for i in range(len(B) - 1):
            imin, imax = min(lmin, B[i + 1] - K), max(rmax, B[i] + K)
            ans = min(ans, imax - imin)
        return ans


# TESTS
for A, K, expected in [
    ([1], 0, 0),
    ([0, 10], 2, 6),
    ([1, 3, 6], 3, 3),
    ([7, 8, 8], 5, 1),
]:
    sol = Solution()
    actual = sol.smallestRangeII(A, K)
    print("The smallest possible difference for A =", A, ", K =", K, "->", actual)
    assert actual == expected
