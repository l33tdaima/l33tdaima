class Solution:
    def minPartitions(self, n: str) -> int:
        return int(max(n))


# TESTS
for n, expected in [("32", 3), ("82734", 8), ("27346209830709182346", 9)]:
    sol = Solution()
    actual = sol.minPartitions(n)
    print(
        "The minimum number of positive deci-binary numbers summing up to",
        n,
        "->",
        actual,
    )
    assert actual == expected
