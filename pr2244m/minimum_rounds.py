from collections import Counter


class Solution:
    def minimumRounds(self, tasks: list[int]) -> int:
        freq = Counter(tasks).values()
        return -1 if 1 in freq else sum((f + 2) // 3 for f in freq)


# TESTS
for tasks, expected in [
    ([2, 2, 3, 3, 2, 4, 4, 4, 4, 4], 4),
    ([2, 3, 3], -1),
]:
    sol = Solution()
    actual = sol.minimumRounds(tasks)
    print("The minimum rounds to complete", tasks, "->", actual)
    assert actual == expected
