from collections import Counter


class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        return (set(word1) == set(word2)) and (
            sorted(Counter(word1).values()) == sorted(Counter(word2).values())
        )


# TESTS
for word1, word2, expected in [
    ("abc", "bca", True),
    ("a", "aa", False),
    ("cabbba", "abbccc", True),
    ("cabbba", "aabbss", False),
    ("cabbba", "aabbcc", False),
]:
    sol = Solution()
    actual = sol.closeStrings(word1, word2)
    print("Are", word1, "and", word2, "close ->", actual)
    assert actual == expected
