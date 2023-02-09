class Solution:
    def distinctNames(self, ideas: list[str]) -> int:
        groupby = [set() for _ in range(26)]
        for idea in ideas:
            groupby[ord(idea[0]) - ord("a")].add(idea[1:])

        ans = 0
        for a, suffixa in enumerate(groupby[:-1]):
            for _, suffixb in enumerate(groupby[a + 1 :]):
                ndups = len(suffixa & suffixb)
                ans += 2 * (len(suffixa) - ndups) * (len(suffixb) - ndups)
        return ans


# TESTS
for ideas, expected in [
    (["coffee", "donuts", "time", "toffee"], 6),
    (["lack", "back"], 0),
]:
    sol = Solution()
    actual = sol.distinctNames(ideas)
    print("# of distinct valid names from ideas", ideas, "->", actual)
    assert actual == expected
