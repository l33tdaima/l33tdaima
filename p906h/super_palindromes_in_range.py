CANDS = [str(i) for i in range(1, 10)] + [
    str(n) + mid + str(n)[::-1]
    for n in range(1, 10000)
    for mid in [""] + [str(i) for i in range(10)]
]


class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
        ans, l, r = 0, int(left), int(right)
        is_palindrome = lambda s: s == s[::-1]
        for c in map(int, CANDS):
            if is_palindrome(str(sq := c ** 2)) and (l <= sq <= r):
                ans += 1
        return ans


# TESTS
for left, right, expected in [
    ("4", "1000", 4),
    ("1", "2", 1),
    ("100", "9999999999", 18),
    ("4998090", "1000098098090", 14),
]:
    sol = Solution()
    actual = sol.superpalindromesInRange(left, right)
    print("# of superpalindrome in [", left, ",", right, "] ->", actual)
    assert actual == expected
