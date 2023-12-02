from collections import Counter


class Solution:
    def countCharacters(self, words: list[str], chars: str) -> int:
        ans, counter = 0, Counter(chars)

        def good(wc: dict) -> bool:
            for c in wc:
                if wc[c] > counter[c]:
                    return False
            return True

        for w in words:
            if good(Counter(w)):
                ans += len(w)
        return ans


for words, chars, expected in [
    (["cat", "bt", "hat", "tree"], "atach", 6),
    (["hello", "world", "leetcode"], "welldonehoneyr", 10),
]:
    sol = Solution()
    actual = sol.countCharacters(words, chars)
    print("The sum of lengths of all good strings ->", actual)
    assert actual == expected
