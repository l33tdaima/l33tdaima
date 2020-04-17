class Solution:
    def checkValidStringV1(self, s: str) -> bool:  # backtrack
        WILDCARD = ["(", "", ")"]

        def backtrack(wip, t):
            for i in range(len(t)):
                if t[i] == "*":  # wildcard
                    for w in WILDCARD:
                        if backtrack(wip, w + t[i + 1 :]):
                            return True
                    return False
                if t[i] == "(":
                    wip += 1
                else:  # ")"
                    wip -= 1
                    if wip < 0:
                        return False
            return wip == 0

        return backtrack(0, s)

    def checkValidStringV2(self, s: str) -> bool:
        lower, upper = 0, 0
        for c in s:
            if c == "(":
                lower, upper = lower + 1, upper + 1
            elif c == ")":
                if lower > 0:
                    lower -= 1
                upper -= 1
            else:
                if lower > 0:
                    lower -= 1
                upper += 1
            if upper < 0:
                return False
        return lower == 0


# TESTS
tests = [
    ["", True],
    ["*", True],
    ["(", False],
    [")", False],
    ["()", True],
    ["(*)", True],
    ["(*))", True],
    ["(*()", True],
    [")*()", False],
    [
        "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())",
        False,
    ],
]
for t in tests:
    sol = Solution()
    actual = sol.checkValidStringV2(t[0])
    print("Is", t[0], "valid parenthesis string? ->", actual)
    assert actual == t[1]
