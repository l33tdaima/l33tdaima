from typing import List


class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        l, r, ans = -1, 0, 0
        for r in range(0, len(seats)):
            if seats[r] == 1:
                if l < 0:
                    ans = max(ans, r)
                else:
                    ans = max(ans, (r - l) // 2)
                l = r
        return max(ans, len(seats) - l - 1)


# TESTS
for seats, expected in [
    ([0, 1], 1),
    ([1, 0, 0, 0, 1, 0, 1], 2),
    ([1, 0, 0, 0], 3),
    ([0, 1, 1, 0, 0, 0, 1, 0, 0, 0], 3),
]:
    sol = Solution()
    actual = sol.maxDistToClosest(seats)
    print("Max distance to closest person of", seats, "->", actual)
    assert actual == expected
