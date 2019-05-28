from typing import List

class Solution:
    def repeatedNTimes(self, A: List[int]) -> int:
        for i in range(2, len(A)):
            if A[i] == A[i - 1] or A[i] == A[i - 2]:
                return A[i]
        return A[-1]

tests = [
    [[1, 2, 3, 3], 3],
    [[2, 1, 2, 5, 3, 2], 2],
    [[5, 1, 5, 2, 5, 3, 5, 4], 5],
    [[9, 5, 6, 9], 9]
]

for t in tests:
    sol = Solution()
    actual = sol.repeatedNTimes(t[0])
    print("The element repeated N times in", t[0], "->", actual);
    assert(actual == t[1])
