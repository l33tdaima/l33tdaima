class Solution:
    def kidsWithCandies(
        self, candies: list[int], extraCandies: int
    ) -> list[bool]:
        greatest = max(candies)
        return [c + extraCandies >= greatest for c in candies]


# TESTS
for candies, extra, expected in [
    ([2, 3, 5, 1, 3], 3, [True, True, True, False, True]),
    ([4, 2, 1, 1, 2], 1, [True, False, False, False, False]),
    ([12, 1, 12], 10, [True, False, True]),
]:
    sol = Solution()
    actual = sol.kidsWithCandies(candies, extra)
    assert actual == expected
