from typing import List

class Solution:
    def sortArrayByParityII(self, A: List[int]) -> List[int]:
        i_even, i_odd = 0, 1
        length = len(A)
        while i_even < length and i_odd < length:
            if A[i_even] % 2 == 0:
                i_even += 2
            elif A[i_odd] % 2 != 0:
                i_odd += 2
            else:
                A[i_even], A[i_odd] = A[i_odd], A[i_even]
        return A
# TESTS
tests = [
    [1,2],
    [4,2,5,7],
    [3,1,2,4]
]
for t in tests:
    sol = Solution()
    actual = sol.sortArrayByParityII(t)
    print("Sort array by parity ->", actual)
