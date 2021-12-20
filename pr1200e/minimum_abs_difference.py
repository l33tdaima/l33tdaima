class Solution:
    def minimumAbsDifference(self, arr: list[int]) -> list[list[int]]:
        sarr = sorted(arr)
        mindiff = min(b - a for a, b in zip(sarr, sarr[1:]))
        return [[a, b] for a, b in zip(sarr, sarr[1:]) if b - a == mindiff]


# TESTS
for arr, expected in [
    ([4, 2, 1, 3], [[1, 2], [2, 3], [3, 4]]),
    ([1, 3, 6, 10, 15], [[1, 3]]),
    ([3, 8, -10, 23, 19, -4, -14, 27], [[-14, -10], [19, 23], [23, 27]]),
]:
    sol = Solution()
    actual = sol.minimumAbsDifference(arr)
    print("The minimum abs difference in", arr, "->", actual)
    assert actual == expected
