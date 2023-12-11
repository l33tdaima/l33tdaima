class Solution:
    def findSpecialInteger(self, arr: list[int]) -> int:
        start, t = 0, len(arr) // 4
        for i in range(1, len(arr) - t):
            if arr[i] == arr[i + t]:
                return arr[i]
        return arr[0]


# TESTS
for arr, expected in [
    ([1, 2, 2, 6, 6, 6, 6, 7, 10], 6),
    ([1, 1], 1),
    ([5], 5),
]:
    sol = Solution()
    actual = sol.findSpecialInteger(arr)
    assert actual == expected
