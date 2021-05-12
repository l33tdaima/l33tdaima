from typing import List


class Solution:
    def maxScoreDP(self, cardPoints: List[int], k: int) -> int:
        memo = dict()

        def helper(front: int, back: int, k: int) -> int:
            if k == 1:
                return max(cardPoints[front], cardPoints[back])
            if (front, back, k) in memo:
                return memo[(front, back, k)]

            memo[(front, back, k)] = max(
                cardPoints[front] + helper(front + 1, back, k - 1),
                cardPoints[back] + helper(front, back - 1, k - 1),
            )
            return memo[(front, back, k)]

        return helper(0, len(cardPoints) - 1, k)

    def maxScoreON(self, cardPoints: List[int], k: int) -> int:
        N, r = len(cardPoints), len(cardPoints) - k
        s = sum(cardPoints[:r])
        rsum = [s]
        for i in range(r, N):
            s += cardPoints[i] - cardPoints[i - r]
            rsum.append(s)
        return sum(cardPoints) - min(rsum)


# TESTS
for cardPoints, k, expected in [
    ([1, 2, 3, 4, 5, 6, 1], 3, 12),
    ([2, 2, 2], 2, 4),
    ([9, 7, 7, 9, 7, 7, 9], 7, 55),
    ([1, 1000, 1], 1, 1),
    ([1, 79, 80, 1, 1, 1, 200, 1], 3, 202),
]:
    sol = Solution()
    actual = sol.maxScoreDP(cardPoints, k)
    print("Maximum scores drawing", k, "cards from", cardPoints, "->", actual)
    assert actual == expected
    assert expected == sol.maxScoreON(cardPoints, k)
