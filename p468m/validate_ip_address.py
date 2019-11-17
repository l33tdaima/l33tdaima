class Solution:
    def validIPAddress(self, IP: str) -> str:
        def isIPv4(s: str) -> bool:
            try:
                return str(int(s)) == s and 0 <= int(s) <= 255
            except:
                return False

        def isIPv6(s: str) -> bool:
            if len(s) > 4:
                return False
            try:
                return int(s, 16) >= 0 and s[0] != "-"
            except:
                return False

        if IP.count(".") == 3 and all(isIPv4(i) for i in IP.split(".")):
            return "IPv4"
        if IP.count(":") == 7 and all(isIPv6(i) for i in IP.split(":")):
            return "IPv6"
        return "Neither"


# TESTS
tests = [
    ("172.16.254.1", "IPv4"),
    ("2001:0db8:85a3:0:0:8A2E:0370:7334", "IPv6"),
    ("256.256.256.256", "Neither"),
]
for t in tests:
    sol = Solution()
    actual = sol.validIPAddress(t[0])
    print("Is", t[0], "IP address of ->", actual)
    assert actual == t[1]
