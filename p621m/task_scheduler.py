from typing import List
from collections import Counter


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = list(Counter(tasks).values())
        most_freq = max(freq)
        most_freq_count = freq.count(most_freq)
        return max(len(tasks), (most_freq - 1) * (n + 1) + most_freq_count)


# T"E",STS
tests = [
    (["A", "A", "A", "B", "B", "B"], 2, 8),
    (["A", "A", "A", "B", "B", "B"], 0, 6),
    (["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2, 16),
    (["A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C", "C",], 2, 14),
    (
        [
            "A",
            "A",
            "A",
            "A",
            "A",
            "B",
            "B",
            "B",
            "B",
            "B",
            "C",
            "C",
            "D",
            "D",
            "E",
        ],
        2,
        15,
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.leastInterval(t[0], t[1])
    print("The least number of time to finish", t[0], "->", actual)
    assert actual == t[2]
