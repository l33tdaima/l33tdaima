from typing import List


class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        n, pos = len(s), float("-Inf")
        ans = [n] * n
        for i in list(range(n)) + list(range(n)[::-1]):
            if s[i] == c:
                pos = i
            ans[i] = min(ans[i], abs(i - pos))
        return ans


# TESTS
for s, c, expected in [
    ("loveleetcode", "e", [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]),
    ("aaab", "b", [3, 2, 1, 0]),
    ("vvvvvvv", "v", [0, 0, 0, 0, 0, 0, 0]),
]:
    sol = Solution()
    actual = sol.shortestToChar(s, c)
    print("The shortest distance from", s, "to", c, "->", actual)
    assert actual == expected
