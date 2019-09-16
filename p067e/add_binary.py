class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i, j, carry = len(a) - 1, len(b) - 1, 0
        res = []
        while i >= 0 or j >= 0 or carry > 0:
            if i >= 0:
                carry += 1 if a[i] == "1" else 0
                i -= 1
            if j >= 0:
                carry += 1 if b[j] == "1" else 0
                j -= 1
            res.append(str(carry % 2))
            carry = carry // 2
        return "".join(res[::-1])


# TEST
tests = [
    ["11", "1", "100"],
    ["10", "1010", "1100"],
    ["110", "10001", "10111"],
    ["111111", "1", "1000000"],
]
for t in tests:
    sol = Solution()
    actual = sol.addBinary(t[0], t[1])
    print(t[0], "+", t[1], "->", actual)
    assert actual == t[2]
