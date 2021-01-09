from typing import List


class Solution:
    def arrayStringsAreEqualV1(self, word1: List[str], word2: List[str]) -> bool:
        return "".join(word1) == "".join(word2)

    def arrayStringsAreEqualV2(self, word1: List[str], word2: List[str]) -> bool:
        def generator(word: List[str]):
            for s in word:
                for c in s:
                    yield c
            yield None

        for c1, c2 in zip(generator(word1), generator(word2)):
            if c1 != c2:
                return False
        return True


# TESTS
for word1, word2, expected in [
    (["ab", "c"], ["a", "bc"], True),
    (["a", "cb"], ["ab", "c"], False),
    (["abc", "d", "defg"], ["abcddefg"], True),
]:
    sol = Solution()
    actual = sol.arrayStringsAreEqualV1(word1, word2)
    print("Array strings", word1, "and", word2, "are equal ->", actual)
    assert actual == expected
    assert sol.arrayStringsAreEqualV1(word1, word2) == expected
