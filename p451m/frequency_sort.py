from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        counter = Counter(s)
        return "".join(
            k * v
            for k, v in sorted(
                counter.items(), key=lambda x: x[1], reverse=True
            )
        )

    def frequencySort1Line(self, s: str) -> str:
        return "".join(k * v for k, v in Counter(s).most_common())


# TESTS
tests = [("tree", "eetr"), ("cccaaa", "cccaaa"), ("Aabb", "bbAa")]
for t in tests:
    sol = Solution()
    actual = sol.frequencySort(t[0])
    print("Sort characters in", t[0], "by frequency ->", actual)
    assert actual == t[1]
