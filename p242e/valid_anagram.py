from cmath import exp
from collections import Counter
from curses.ascii import SO


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)


for s, t, expected in [
    ["rat", "cat", False],
    ["eat", "tea", True],
    ["anagram", "nagaram", True],
    ["成功", "功成", True],
    ["成功", "功夫", False],
]:
    sol = Solution()
    actual = sol.isAnagram(s, t)
    print(f"Is {s} and {t} anagram? -> {actual}")
    assert actual == expected
