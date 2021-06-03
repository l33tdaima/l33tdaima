from functools import lru_cache


class Solution:
    def isInterleaveBU(self, s1: str, s2: str, s3: str) -> bool:
        l1, l2, l3 = len(s1), len(s2), len(s3)
        if l1 + l2 != l3:
            return False
        dp = [[False] * (l2 + 1) for _ in range(l1 + 1)]
        for i in range(l1 + 1):
            for j in range(l2 + 1):
                if i == 0 and j == 0:
                    dp[i][j] = True
                elif i == 0:
                    dp[i][j] = dp[i][j - 1] and s2[j - 1] == s3[j - 1]
                elif j == 0:
                    dp[i][j] = dp[i - 1][j] and s1[i - 1] == s3[i - 1]
                else:
                    dp[i][j] = (dp[i][j - 1] and s2[j - 1] == s3[i + j - 1]) or (
                        dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]
                    )
        return dp[-1][-1]

    def isInterleaveTD(self, s1: str, s2: str, s3: str) -> bool:
        @lru_cache(None)
        def helper(s1: str, s2: str, s3: str) -> bool:
            l1, l2, l3 = len(s1), len(s2), len(s3)
            if l1 + l2 != l3:
                return False
            if not s1 and not s2 and not s3:
                return True
            return (
                l1 > 0 and l3 > 0 and s1[0] == s3[0] and helper(s1[1:], s2, s3[1:])
            ) or (l2 > 0 and l3 > 0 and s2[0] == s3[0] and helper(s1, s2[1:], s3[1:]))

        return helper(s1, s2, s3)


# TESTS
for s1, s2, s3, expected in [
    ("aabcc", "dbbca", "aadbbcbcac", True),
    ("aabcc", "dbbca", "aadbbbaccc", False),
    ("", "", "", True),
]:
    sol = Solution()
    actual = sol.isInterleaveBU(s1, s2, s3)
    print(f"{s3} is formed by an interleaving of '{s1}'' and '{s2}' -> {actual}")
    assert actual == expected
    assert expected == sol.isInterleaveTD(s1, s2, s3)
