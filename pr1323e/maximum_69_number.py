class Solution:
    def maximum69NumberV1(self, num: int) -> int:
        ns = list(str(num))
        for i, n in enumerate(ns):
            if n == "6":
                ns[i] = "9"
                break
        return int("".join(ns))

    def maximum69NumberV2(self, num: int) -> int:
        n, i, six = num, 0, -1
        while n > 0:
            if n % 10 == 6:
                six = i
            n, i = n // 10, i + 1
        return (num + 3 * (10 ** six)) if six != -1 else num


# TESTS
for num, expected in [
    (9669, 9969),
    (9996, 9999),
    (9999, 9999),
]:
    sol = Solution()
    actual = sol.maximum69NumberV2(num)
    print("Maximum 69 number ->", actual)
    assert actual == expected
    actual = sol.maximum69NumberV1(num)
