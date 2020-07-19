from itertools import zip_longest


class Solution:
    def addBinaryV1(self, a: str, b: str) -> str:
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

    def addBinaryV2(self, a: str, b: str) -> str:
        carry, ans = 0, []
        for i, j in zip_longest(a[::-1], b[::-1], fillvalue="0"):
            carry += int(i) + int(j)
            ans.append(str(carry % 2))
            carry //= 2
        if carry:
            ans.append("1")
        return "".join(ans[::-1])


# TEST
tests = [
    ["11", "1", "100"],
    ["10", "1010", "1100"],
    ["110", "10001", "10111"],
    ["111111", "1", "1000000"],
]
for t in tests:
    sol = Solution()
    actual = sol.addBinaryV2(t[0], t[1])
    print(t[0], "+", t[1], "->", actual)
    assert actual == t[2]
    assert t[2] == sol.addBinaryV1(t[0], t[1])
