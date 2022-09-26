class Solution:
    def equationsPossible(self, equations: list[str]) -> bool:
        uf = {c: c for c in "abcdefghijklmnopqrstuvwxyz"}

        def find(x: str) -> str:
            if x != uf[x]:
                uf[x] = find(uf[x])
            return uf[x]

        for a, e, _, b in equations:
            if e == "=":
                uf[find(a)] = find(b)
        return not any(
            e == "!" and find(a) == find(b) for a, e, _, b in equations
        )


# TESTS
for equations, expected in [
    (["a==b", "b!=a"], False),
    (["b==a", "a==b"], True),
]:
    sol = Solution()
    actual = sol.equationsPossible(equations)
    print("Satisfiability of equations", equations, "->", actual)
    assert actual == expected
