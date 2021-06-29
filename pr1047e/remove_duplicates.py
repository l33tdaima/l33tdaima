class Solution:
    def removeDuplicates(self, S: str) -> str:
        ans = []
        for c in S:
            if ans and ans[-1] == c:
                ans.pop()
            else:
                ans.append(c)
        return "".join(ans)


# TESTS
for s, expected in [
    ("abcd", "abcd"),
    ("abbaca", "ca"),
    ("azxxzy", "ay"),
]:
    sol = Solution()
    actual = sol.removeDuplicates(s)
    print("Remove duplicates in", s, "->", actual)
    assert actual == expected
