class Solution:
    # sort by end
    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:
        ans, end = 0, float("-Inf")
        for s, e in sorted(intervals, key=lambda x: x[1]):
            if s >= end:
                end = e
            else:
                ans += 1
        return ans


# TESTS
for its, expected in [
    ([[1, 2], [2, 3], [3, 4], [1, 3]], 1),
    ([[1, 2], [1, 2], [1, 2]], 2),
    ([[1, 2], [2, 3]], 0),
]:
    sol = Solution()
    actual = sol.eraseOverlapIntervals(its)
    print(
        "The minimum number of intervals to remove from",
        its,
        "->",
        actual,
    )
    assert actual == expected
