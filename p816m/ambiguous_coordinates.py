from typing import List
from itertools import product


class Solution:
    def ambiguousCoordinates(self, s: str) -> List[str]:
        def expand(ds: str) -> List[str]:
            if len(ds) > 1 and ds[0] == ds[-1] == "0":
                return []
            if ds[-1] == "0":
                return [ds]
            if ds[0] == "0":
                return [f"{ds[0]}.{ds[1:]}"]
            return [ds] + [f"{ds[:i]}.{ds[i:]}" for i in range(1, len(ds))]

        s = s[1:-1]
        return [
            f"({a}, {b})"
            for i in range(1, len(s))
            for a, b in product(expand(s[:i]), expand(s[i:]))
        ]


# TESTS
for s, expected in [
    ("(123)", ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]),
    ("(00011)", ["(0.001, 1)", "(0, 0.011)"]),
    (
        "(0123)",
        ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"],
    ),
    ("(100)", ["(10, 0)"]),
]:
    sol = Solution()
    actual = sol.ambiguousCoordinates(s)
    print("Ambiguous Coordinates of", s, "->", actual)
    assert set(actual) == set(expected)
