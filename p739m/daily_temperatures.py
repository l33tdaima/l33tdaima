from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        N = len(temperatures)
        ans, monostack = [0] * N, [N - 1]

        for i in range(N - 2, -1, -1):
            curr = temperatures[i]
            while monostack and curr >= temperatures[monostack[-1]]:
                monostack.pop()
            ans[i] = monostack[-1] - i if monostack else 0
            monostack.append(i)

        return ans


# TESTS
for temperatures, expected in [
    ([73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]),
    ([30, 40, 50, 60], [1, 1, 1, 0]),
    ([30, 60, 90], [1, 1, 0]),
    ([90, 90, 90], [0, 0, 0]),
]:
    sol = Solution()
    actual = sol.dailyTemperatures(temperatures)
    print("Answer for daily temperatures", temperatures, "->", actual)
    assert actual == expected
