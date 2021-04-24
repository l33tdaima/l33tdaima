class Solution:
    def countBinarySubstringsV1(self, s: str) -> int:
        ans, count, latest = 0, [0, 0], -1
        for c in s:
            d = int(c)
            if d != latest:
                count[d], latest = 0, d
            count[d] += 1
            if count[1 - d] > 0:
                count[1 - d] -= 1
                ans += 1
        return ans

    def countBinarySubstringsV2(self, s: str) -> int:
        ss = list(map(len, s.replace("01", "0 1").replace("10", "1 0").split()))
        return sum(min(a, b) for a, b in zip(ss, ss[1:]))


# TESTS
for s, expected in [
    ("00110011", 6),
    ("10101", 4),
    ("0011100", 4),
    ("00110", 3),
    ("00011011", 4),
]:
    sol = Solution()
    actual = sol.countBinarySubstringsV2(s)
    print("Count Binary Substrings in", s, "->", actual)
    assert expected == actual
    assert expected == sol.countBinarySubstringsV1(s)
