from typing import List


class Solution:
    def smallestRangeI(self, A: List[int], K: int) -> int:
        return max(0, max(A) - min(A) - 2 * K)


# TESTS
for A, K, expected in [([1], 0, 0), ([0, 10], 2, 6), ([1, 3, 6], 3, 0)]:
    sol = Solution()
    actual = sol.smallestRangeI(A, K)
    print("The smallest possible difference for A =", A, ", K =", K, "->", actual)
    assert actual == expected
