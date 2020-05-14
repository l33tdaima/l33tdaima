class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = list()
        for d in num:
            while k > 0 and len(stack) > 0 and d < stack[-1]:
                stack.pop()
                k -= 1
            stack.append(d)
        return "".join(stack[: -k or None]).lstrip("0") or "0"


# TESTS
tests = [
    ["1432219", 3, "1219"],
    ["1234567", 3, "1234"],
    ["10200", 1, "200"],
    ["10", 2, "0"],
    ["12345264", 4, "1224"],
]
for t in tests:
    sol = Solution()
    actual = sol.removeKdigits(t[0], t[1])
    print("Smallest after removing", t[1], "digits from", t[0], "->", actual)
    assert actual == t[2]
