from typing import List


class Solution:
    def isIdealPermutation(self, A: List[int]) -> bool:
        return all(abs(i - v) <= 1 for i, v in enumerate(A))


# TESTS
for A, expected in [
    ([1, 0, 2], True),
    ([1, 2, 0], False),
    ([0], True),
    ([0, 3, 2, 1], False),
]:
    sol = Solution()
    actual = sol.isIdealPermutation(A)
    print("Global inversions is equal to local inversions in", A, "->", actual)
    assert actual == expected
