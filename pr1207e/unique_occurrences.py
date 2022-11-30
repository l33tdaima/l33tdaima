from collections import Counter


class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        counter = Counter(arr)
        return len(set(counter.values())) == len(counter)


# TESTS
for arr, expected in [
    ([1, 2, 2, 1, 1, 3], True),
    ([1, 2], False),
    ([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0], True),
]:
    sol = Solution()
    actual = sol.uniqueOccurrences(arr)
    assert actual == expected
