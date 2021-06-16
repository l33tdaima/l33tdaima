from typing import List


class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        if len(matchsticks) < 4:
            return False
        mtsum = sum(matchsticks)
        if mtsum % 4 != 0:
            return False

        sides = [0] * 4
        matchsticks.sort(reverse=True)

        def dfs(i: int, target: int) -> bool:
            if i == len(matchsticks):
                return all(s == sides[0] for s in sides[1:])

            for k in range(4):
                if sides[k] + matchsticks[i] > target:
                    continue
                sides[k] += matchsticks[i]
                if dfs(i + 1, target):
                    return True
                sides[k] -= matchsticks[i]
            return False

        return dfs(0, mtsum // 4)


# TESTS
for matchsticks, expected in [
    ([1, 1, 2, 2, 2], True),
    ([3, 3, 3, 3, 4], False),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3, 2, 1], False),
]:
    sol = Solution()
    actual = sol.makesquare(matchsticks)
    print("Matchsticks", matchsticks, "can make a square ->", actual)
    assert actual == expected
