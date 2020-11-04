class Solution:
    def maxPower(self, s: str) -> int:
        ans, count = 1, 1
        for i in range(1, len(s)):
            if s[i] == s[i - 1]:
                count += 1
                ans = max(ans, count)
            else:
                count = 1
        return ans


# TESTS
for s, expected in [
    ("cc", 2),
    ("leetcode", 2),
    ("abbcccddddeeeeedcba", 5),
    ("triplepillooooow", 5),
    ("hooraaaaaaaaaaay", 11),
    ("tourist", 1),
]:
    sol = Solution()
    actual = sol.maxPower(s)
    print(f"Power of the string '{s}' ->", actual)
    assert actual == expected
