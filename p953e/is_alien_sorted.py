from typing import List


class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        letter_order = {c: i for i, c in enumerate(order)}

        def le(w1: str, w2: str) -> bool:
            for c1, c2 in zip(w1, w2):
                if c1 != c2:
                    return letter_order[c1] < letter_order[c2]
            return len(w1) <= len(w2)

        return all(le(w1, w2) for w1, w2 in zip(words, words[1:]))


# TESTS
for words, order, expected in [
    (["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz", True),
    (["word", "world", "row"], "worldabcefghijkmnpqstuvxyz", False),
    (["apple", "app"], "abcdefghijklmnopqrstuvwxyz", False),
]:
    sol = Solution()
    actual = sol.isAlienSorted(words, order)
    print("Is words", words, "sorted? ->", actual)
    assert actual == expected

