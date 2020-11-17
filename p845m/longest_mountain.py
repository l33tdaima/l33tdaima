from typing import List


class Solution:
    def longestMountainV1(self, A: List[int]) -> int:
        up, down = [0] * len(A), [0] * len(A)
        for i in range(1, len(A)):
            if A[i] > A[i - 1]:
                up[i] = up[i - 1] + 1
        for i in range(len(A) - 1)[::-1]:
            if A[i] > A[i + 1]:
                down[i] = down[i + 1] + 1
        return max([u + d + 1 for u, d in zip(up, down) if u and d] or [0])

    def longestMountainV2(self, A: List[int]) -> int:
        ans, i = 0, 1
        while i < len(A):
            while i < len(A) and A[i - 1] == A[i]:
                i += 1
            up = 0
            while i < len(A) and A[i - 1] < A[i]:
                i, up = i + 1, up + 1
            down = 0
            while i < len(A) and A[i - 1] > A[i]:
                i, down = i + 1, down + 1
            if up and down:
                ans = max(ans, up + down + 1)
        return ans


# TESTS
for A, expected in [
    ([2, 1, 4, 7, 3, 2, 5], 5),
    ([2, 2, 2], 0),
    ([0, 1, 2, 1, 4, 7, 3, 2, 5, 4], 5),
]:
    sol = Solution()
    actual = sol.longestMountainV2(A)
    print("The longest mountain in", A, "->", actual)
    assert actual == expected == sol.longestMountainV1(A)
