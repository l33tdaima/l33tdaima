from typing import List


class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        even, odd = [], []
        for a in A:
            if a & 1:
                odd.append(a)
            else:
                even.append(a)
        return even + odd

    def sortArrayByParityInPlace(self, A: List[int]) -> List[int]:
        e, o = 0, 0
        while o < len(A):
            if not (A[o] & 1):
                A[e], A[o] = A[o], A[e]
                e += 1
            o += 1
        return A


# TESTS
tests = [
    ([3, 1, 2, 4], [2, 4, 3, 1]),
    ([3, 1], [3, 1]),
    ([2, 4], [2, 4]),
]
for t in tests:
    sol = Solution()
    actual = sol.sortArrayByParity(t[0])
    assert actual == t[1]
    print("Sort by partiy ->", sol.sortArrayByParityInPlace(t[0]))
