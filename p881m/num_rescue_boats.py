from typing import List


class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        l, r = 0, len(people) - 1
        sp = sorted(people, reverse=True)
        while l <= r:
            if sp[l] + sp[r] <= limit:
                r -= 1
            l += 1
        return l


# TESTS
for people, limit, expected in [
    ([1], 4, 1),
    ([1, 2], 3, 1),
    ([1, 1, 1], 1, 3),
    ([1, 1, 1], 3, 2),
    ([3, 2, 2, 1], 3, 3),
    ([3, 5, 3, 4], 5, 4),
    (
        [2, 49, 10, 7, 11, 41, 47, 2, 22, 6, 13, 12, 33, 18, 10, 26, 2, 6, 50, 10],
        50,
        11,
    ),
]:
    sol = Solution()
    actual = sol.numRescueBoats(people, limit)
    print("The minimum boats to carry", people, "with limit", limit, "->", actual)
    assert actual == expected
