class Solution:
    def nextGreatestLetter(self, letters: list[str], target: str) -> str:
        l, r = 0, len(letters) - 1
        while l < r:
            m = (l + r) // 2
            if letters[m] <= target:
                l = m + 1
            else:
                r = m
        return letters[0] if letters[l] <= target else letters[l]


# TESTS
for letters, target, expected in [
    (["c", "f", "j"], "a", "c"),
    (["c", "f", "j"], "c", "f"),
    (["x", "x", "y", "y"], "z", "x"),
]:
    sol = Solution()
    actual = sol.nextGreatestLetter(letters, target)
    print("Smallest letter greater than", target, "->", actual)
    assert actual == expected
