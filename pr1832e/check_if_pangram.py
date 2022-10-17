class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return set(sentence) == set("abcdefghijklmnopqrstuvwxyz")


# TESTS
for sentence, expected in [
    ("thequickbrownfoxjumpsoverthelazydog", True),
    ("leetcode", False),
]:
    sol = Solution()
    actual = sol.checkIfPangram(sentence)
    assert actual == expected
