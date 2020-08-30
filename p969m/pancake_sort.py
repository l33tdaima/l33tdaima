from typing import List


class Solution:
    def pancakeSort(self, A: List[int]) -> List[int]:
        N, ans = len(A), []
        for n in range(N, 1, -1):
            k = A.index(n)
            if k < n - 1:  # not already sorted
                ans.extend([k + 1, n])
            A = A[:k:-1] + A[:k]
        return ans


# TESTS
tests = [
    [1],
    [2, 1],
    [1, 2, 3],
    [1, 3, 2, 4],
    [3, 2, 4, 1],
    [4, 5, 1, 2, 3],
    [8, 7, 6, 5, 4, 3, 2, 1],
]
for t in tests:
    sol = Solution()
    print("k-values of the pancake flips of sorting", t, "->", sol.pancakeSort(t))
