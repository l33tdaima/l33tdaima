from cmath import exp


class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(w[::-1] for w in s.split())


# TESTS
for s, expected in [
    ("Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"),
    ("God Ding", "doG gniD"),
]:
    sol = Solution()
    actual = sol.reverseWords(s)
    print("Reverse words in", s, "->", actual)
    assert actual == expected
