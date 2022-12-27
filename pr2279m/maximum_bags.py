class Solution:
    def maximumBags(
        self, capacity: list[int], rocks: list[int], additionalRocks: int
    ) -> int:
        rem = sorted([c - r for c, r in zip(capacity, rocks)], reverse=True)
        while rem and additionalRocks > 0 and rem[-1] <= additionalRocks:
            additionalRocks -= rem.pop()
        return len(rocks) - len(rem)


# TESTS
for capacity, rocks, additionalRocks, expected in [
    ([2, 3, 4, 5], [1, 2, 4, 4], 2, 3),
    ([10, 2, 2], [2, 2, 0], 100, 3),
]:
    sol = Solution()
    actual = sol.maximumBags(capacity, rocks, additionalRocks)
    assert actual == expected
