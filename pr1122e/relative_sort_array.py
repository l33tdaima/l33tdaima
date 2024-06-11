class Solution:
    def relativeSortArray(self, arr1: list[int], arr2: list[int]) -> list[int]:
        keys = {n: i for i, n in enumerate(arr2)}
        return sorted(arr1, key=lambda x: keys.get(x, x + 1000))


# TESTS
for arr1, arr2, expected in [
    (
        [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
        [2, 1, 4, 3, 9, 6],
        [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
    ),
    ([28, 6, 22, 8, 44, 17], [22, 28, 8, 6], [22, 28, 8, 6, 17, 44]),
]:
    sol = Solution()
    actual = sol.relativeSortArray(arr1, arr2)
    print("Relative sorted arr1", arr1, "by", arr2, "->", actual)
    assert actual == expected
