class Solution:
    def restoreIpAddresses(self, s: str) -> list[str]:
        ans = []

        def backtrack(s: str, idx: int, path: str) -> None:
            if idx > 4:
                return
            if idx == 4 and not s:
                ans.append(path[:-1])
                return
            for i in range(1, len(s) + 1):
                if s[:i] == "0" or (s[0] != "0" and 0 < int(s[:i]) < 256):
                    backtrack(s[i:], idx + 1, path + s[:i] + ".")

        backtrack(s, 0, "")
        return ans


# TESTS
for s, expected in [
    ("25525511135", ["255.255.11.135", "255.255.111.35"]),
    ("0000", ["0.0.0.0"]),
    (
        "101023",
        ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"],
    ),
]:
    sol = Solution()
    actual = sol.restoreIpAddresses(s)
    print("Valid IP Addresses in", s, "->", actual)
    assert sorted(actual) == sorted(expected)
