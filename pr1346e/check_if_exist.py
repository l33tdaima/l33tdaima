class Solution:
    def checkIfExist(self, arr: list[int]) -> bool:
        seen = set()
        for i in arr:
            if 2 * i in seen or i / 2 in seen:
                return True
            seen.add(i)
        return False


# TESTS
for arr, expected in [
    ([10, 2, 5, 3], True),
    ([3, 1, 7, 11], False),
    ([-2, 0, 10, -19, 4, 6, -8], False),
]:
    sol = Solution()
    actual = sol.checkIfExist(arr)
    print(f"There is n and its double in {arr} -> {actual}")
    assert actual == expected
