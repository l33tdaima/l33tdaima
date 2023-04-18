from itertools import zip_longest


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        return "".join(
            c1 + c2 for c1, c2 in zip_longest(word1, word2, fillvalue="")
        )


# TESTS
for word1, word2, expected in [
    ("abc", "pqr", "apbqcr"),
    ("ab", "pqrs", "apbqrs"),
    ("abcd", "pq", "apbqcd"),
]:
    sol = Solution()
    actual = sol.mergeAlternately(word1, word2)
    print("Merged alternately", word1, word2, "->", actual)
    assert actual == expected
