from collections import Counter


class Solution:
    def longestPalindrome(self, words: list[str]) -> int:
        counter, ans, unpaired = Counter(words), 0, 0
        for w in counter:
            r = w[::-1]
            if r == w:  # double letter
                ans += (counter[w] // 2) * 2
                counter[w] = counter[w] % 2
                if unpaired == 0 and counter[w] % 2:
                    unpaired = 1
            elif counter[w] > 0 and r in counter and counter[r] > 0:
                v = min(counter[w], counter[r])
                ans += 2 * v
                counter[w] -= v
                counter[r] -= v
        return (ans + unpaired) * 2


# TESTS
for words, expected in [
    (["lc", "cl", "gg"], 6),
    (["ab", "ty", "yt", "lc", "cl", "ab"], 8),
    (["cc", "ll", "xx"], 2),
    (
        [
            "dd",
            "aa",
            "bb",
            "dd",
            "aa",
            "dd",
            "bb",
            "dd",
            "aa",
            "cc",
            "bb",
            "cc",
            "dd",
            "cc",
        ],
        22,
    ),
]:
    sol = Solution()
    actual = sol.longestPalindrome(words)
    print("Length of the longest palindrome in", words, "->", actual)
    assert actual == expected
