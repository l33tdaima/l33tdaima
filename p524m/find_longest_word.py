from typing import List


class Solution:
    def findLongestWordV1(self, s: str, d: List[str]) -> str:
        ans = ""
        for word in d:
            if len(word) > len(ans) or (len(word) == len(ans) and word < ans):
                # match word in s
                i = 0
                for c in s:
                    if i < len(word) and word[i] == c:
                        i += 1
                if i == len(word):
                    ans = word
        return ans

    def findLongestWordV2(self, s: str, d: List[str]) -> str:
        ans = ""
        for w in d:
            if (-len(w), w) < (-len(ans), ans):
                it = iter(s)
                if all(c in it for c in w):
                    ans = w
        return ans


# TESTS
for s, d, expected in [
    ("abpcplea", ["ale", "apple", "monkey", "plea"], "apple"),
    ("abpcplea", ["a", "b", "c"], "a"),
    ("zz", ["ale", "apple", "monkey", "plea"], ""),
]:
    sol = Solution()
    actual = sol.findLongestWordV1(s, d)
    print("The longest word in", d, "matching", s, "->", actual)
    assert actual == expected
    assert expected == sol.findLongestWordV2(s, d)
