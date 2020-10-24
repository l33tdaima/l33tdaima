from typing import List


class Solution:
    def bagOfTokensScore(self, tokens: List[int], P: int) -> int:
        def helper(token: List[int], P: int, score: int) -> int:
            if not tokens:
                return score
            if P >= tokens[0]:
                P, score = P - tokens[0], score + 1
                tokens.pop(0)
            elif score > 0 and len(tokens) > 1:
                P, score = P + tokens[-1], score - 1
                tokens.pop()
            else:
                return score
            return helper(tokens, P, score)

        tokens.sort()
        return helper(tokens, P, 0)


# TESTS
for tokens, P, expected in [
    ([100], 50, 0),
    ([100, 200], 150, 1),
    ([100, 200, 300, 400], 200, 2),
]:
    sol = Solution()
    print("The maximum score of tokens", tokens, "P =", P, "->")
    actual = sol.bagOfTokensScore(tokens, P)
    print("  ", actual)
