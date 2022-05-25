from bisect import bisect_left


class Solution:
    def maxEnvelopesN2(self, envelopes: list[list[int]]) -> int:
        heights = [
            e[1] for e in sorted(envelopes, key=lambda e: (e[0], -e[1]))
        ]
        dp, ans = [1] * len(heights), 1
        for i in range(1, len(heights)):
            dp[i] = (
                max(
                    [
                        d
                        for j, d in enumerate(dp[:i])
                        if heights[j] < heights[i]
                    ]
                    or [0]
                )
                + 1
            )
            ans = max(ans, dp[i])
        return ans

    def maxEnvelopesNLogN(self, envelopes: list[list[int]]) -> int:
        heights = [
            e[1] for e in sorted(envelopes, key=lambda e: (e[0], -e[1]))
        ]
        tails = []
        for h in heights:
            i = bisect_left(tails, h)
            tails[i : i + 1] = [h]
        return len(tails)


# TESTS
for envelopes, expected in [
    ([[5, 4], [6, 4], [6, 7], [2, 3]], 3),
    ([[1, 1], [1, 1], [1, 1]], 1),
]:
    sol = Solution()
    actual = sol.maxEnvelopesN2(envelopes)
    print("The maximum # of envelopes from", envelopes, "->", actual)
    assert actual == expected
    assert expected == sol.maxEnvelopesNLogN(envelopes)
