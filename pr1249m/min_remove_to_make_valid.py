class Solution:
    def minRemoveToMakeValidV1(self, s: str) -> str:
        matched, stack = set(), list()
        for i, c in enumerate(s):
            if c == "(":
                stack.append(i)
            elif c == ")" and len(stack) > 0:
                matched.add(stack.pop())
                matched.add(i)
        return "".join([c for i, c in enumerate(s) if c not in "()" or i in matched])

    def minRemoveToMakeValidV2(self, s: str) -> str:
        removed, stack = set(), list()
        for i, c in enumerate(s):
            if c == "(":
                stack.append(i)
            elif c == ")":
                if len(stack) > 0:
                    stack.pop()
                else:
                    removed.add(i)
        removed |= set(stack)
        return "".join(
            [c for i, c in enumerate(s) if c not in "()" or i not in removed]
        )


# TESTS
for s, expected in [
    ("lee(t(c)o)de)", "lee(t(c)o)de"),
    ("a)b(c)d", "ab(c)d"),
    ("))((", ""),
    ("(a(b(c)d)", "a(b(c)d)"),
]:
    sol = Solution()
    actual = sol.minRemoveToMakeValidV1(s)
    print(f"Minimum Remove to Make '{s}' Valid Parentheses -> {actual}")
    assert actual == expected
    assert expected == sol.minRemoveToMakeValidV2(s)
