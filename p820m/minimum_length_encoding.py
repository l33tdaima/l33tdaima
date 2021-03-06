from typing import List


class Solution:
    def minimumLengthEncodingV1(self, words: List[str]) -> int:
        s = set(words)
        for w in words:
            for i in range(1, len(w)):
                s.discard(w[i:])
        return sum(len(w) + 1 for w in s)

    def minimumLengthEncodingV2(self, words: List[str]) -> int:
        root, leaves = dict(), []
        for w in set(words):
            cur = root
            for c in w[::-1]:
                cur[c] = cur.get(c, dict())
                cur = cur[c]
            leaves.append((cur, len(w) + 1))
        return sum(l for node, l in leaves if len(node) == 0)


# TESTS
for words, expected in [
    (["time", "me", "bell"], 10),
    (["t"], 2),
    (["time", "im", "bell"], 13),
]:
    sol = Solution()
    actual = sol.minimumLengthEncodingV1(words)
    print("The minimum length of encoding", words, "->", actual)
    assert actual == expected
    assert expected == sol.minimumLengthEncodingV2(words)
