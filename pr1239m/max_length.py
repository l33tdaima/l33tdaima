from typing import List


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        dp = [set()]
        for a in arr:
            s = set(a)
            if len(s) < len(a):
                continue
            for c in dp:
                if c & s:
                    continue
                dp.append(c | s)
        return max(len(c) for c in dp)


# TESTS
for arr, expected in [
    (["un", "iq", "ue"], 4),
    (["cha", "r", "act", "ers"], 6),
    (["abcdefghijklmnopqrstuvwxyz"], 26),
]:
    sol = Solution()
    actual = sol.maxLength(arr)
    print("The max length of unique concatenation in", arr, "->", actual)
    assert actual == expected
