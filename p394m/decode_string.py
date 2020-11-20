class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        for c in s:
            if c == "]":
                pos = len(stack) - 1 - stack[::-1].index("[")
                rep = "".join(stack[pos + 1 :])
                stack = stack[:pos]
                count = ""
                while len(stack) > 0 and stack[-1].isdigit():
                    count = stack.pop() + count
                stack.append(rep * int(count))
            else:
                stack.append(c)
        return "".join(stack)


# TESTS
for s, expected in [
    ("3[a]2[bc]", "aaabcbc"),
    ("3[a2[c]]", "accaccacc"),
    ("2[abc]3[cd]ef", "abcabccdcdcdef"),
    ("abc3[cd]xyz", "abccdcdcdxyz"),
]:
    sol = Solution()
    actual = sol.decodeString(s)
    print("Decoded string of", s, "->", actual)
    assert actual == expected
