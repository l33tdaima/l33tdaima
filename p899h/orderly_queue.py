class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        return (
            "".join(sorted(s)) if k > 1 else min(s[i:] + s[:i] for i in range(len(s)))
        )


# TESTS
for s, k, expected in [
    ("cba", 1, "acb"),
    ("baaca", 3, "aaabc"),
]:
    sol = Solution()
    actual = sol.orderlyQueue(s, k)
    print("The lexicographically smallest string of", s, ", k =", k, "->", actual)
    assert actual == expected
