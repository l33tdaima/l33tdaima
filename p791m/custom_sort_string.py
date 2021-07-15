class Solution:
    def customSortString(self, order: str, s: str) -> str:
        ordermap = {c: i for i, c in enumerate(order)}
        return "".join(
            map(
                lambda x: x[1],
                sorted([(ordermap[c] if c in ordermap else -1, c) for c in s]),
            )
        )


# TESTS
for order, s, expected in [
    ("cba", "abcd", "dcba"),
]:
    sol = Solution()
    actual = sol.customSortString(order, s)
    print("Custom sort string of", s, "by order", order, "->", actual)
