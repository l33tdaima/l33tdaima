class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        ans, k = ["a"] * n, k - n
        i = n - 1
        while k > 0:
            t = min(k, 25)
            ans[i] = chr(97 + t)
            i, k = i - 1, k - t
        return "".join(ans)


# TESTS
for n, k, expected in [
    (1, 26, "z"),
    (3, 27, "aay"),
    (5, 73, "aaszz"),
]:
    sol = Solution()
    actual = sol.getSmallestString(n, k)
    print("Smallest string of length", n, "k =", k, "->", actual)
    assert actual == expected
