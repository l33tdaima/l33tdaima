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
for num, k, expected in [
    ["1432219", 3, "1219"],
    ["1234567", 3, "1234"],
    ["10200", 1, "200"],
    ["10", 2, "0"],
    ["12345264", 4, "1224"],
]:
    sol = Solution()
    actual = sol.removeKdigits(num, k)
    print("Smallest after removing", k, "digits from", num, "->", actual)
    assert actual == expected
