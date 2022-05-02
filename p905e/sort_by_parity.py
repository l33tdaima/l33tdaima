class Solution:
    def sortArrayByParity(self, A: list[int]) -> list[int]:
        even, odd = [], []
        for a in A:
            if a & 1:
                odd.append(a)
            else:
                even.append(a)
        return even + odd

    def sortArrayByParityInPlace(self, A: list[int]) -> list[int]:
        e, o = 0, 0
        while o < len(A):
            if not (A[o] & 1):
                A[e], A[o] = A[o], A[e]
                e += 1
            o += 1
        return A


# TESTS
for nums, expected in [
    ([3, 1, 2, 4], [2, 4, 3, 1]),
    ([3, 1], [3, 1]),
    ([2, 4], [2, 4]),
]:
    sol = Solution()
    actual = sol.sortArrayByParity(nums)
    assert actual == expected
    print("Sort by partiy ->", sol.sortArrayByParityInPlace(nums))
