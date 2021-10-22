from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        counter = Counter(s)
        return "".join(
            k * v for k, v in sorted(counter.items(), key=lambda x: x[1], reverse=True)
        )

    def frequencySort1Line(self, s: str) -> str:
        return "".join(k * v for k, v in Counter(s).most_common())


# TESTS
for s, expected in [
    ("tree", "eetr"),
    ("cccaaa", "cccaaa"),
    ("Aabb", "bbAa"),
]:
    sol = Solution()
    actual = sol.frequencySort(s)
    print("Sort characters in", s, "by frequency ->", actual)
    assert actual == expected
