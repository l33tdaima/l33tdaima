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
tests = [
    ("abcd", "abcd"),
    ("abbaca", "ca")
]
for t in tests:
    sol = Solution()
    actual = sol.removeDuplicates(t[0])
    print("Remove duplicates in", t[0], "->", actual);
    assert(actual == t[1])
