from typing import List


class Solution:
    def numberOfArithmeticSlices(self, A: List[int]) -> int:
        n, ans = 0, 0
        for q in range(2, len(A)):
            if A[q - 1] - A[q - 2] == A[q] - A[q - 1]:
                n += 1
                ans += n
            else:
                n = 0
        return ans


# TESTS
for A, expected in [
    ([7, 7, 7, 7], 3),
    ([1, 2, 3, 4], 3),
    ([1, 3, 5, 7, 9], 6),
    ([6, 7, 3, -1, -5, -9, 0, 0], 6),
]:
    sol = Solution()
    actual = sol.numberOfArithmeticSlices(A)
    print("Number of arithmetic slices in", A, "->", actual)
    assert actual == expected
