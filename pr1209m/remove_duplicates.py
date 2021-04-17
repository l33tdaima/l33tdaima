class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        stack = [("#", 0)]
        for c in s:
            v, n = stack[-1]
            if v != c:
                stack.append((c, 1))
            elif n < k - 1:
                stack[-1] = (c, n + 1)
            else:
                stack.pop()
        return "".join(v * n for v, n in stack)


# TESTS
for s, k, expected in [
    ("abcd", 2, "abcd"),
    ("deeedbbcccbdaa", 3, "aa"),
    ("pbbcggttciiippooaais", 2, "ps"),
]:
    sol = Solution()
    actual = sol.removeDuplicates(s, k)
    print(f"After k = {k} duplicate removals in '{s}' -> '{actual}'")
    assert actual == expected
