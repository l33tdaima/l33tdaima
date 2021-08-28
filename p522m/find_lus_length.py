from typing import List


class Solution:
    def findLUSlength(self, strs: List[str]) -> int:
        def isSubsequence(s: str, t: str) -> bool:
            t = iter(t)
            return all(c in t for c in s)

        strs.sort(key=len, reverse=True)
        for i, s in enumerate(strs):
            if all(not isSubsequence(s, t) for j, t in enumerate(strs) if i != j):
                return len(s)
        return -1


# TESTS
for strs, expected in [
    (["aba", "cdc", "eae"], 3),
    (["aaa", "aaa", "aa"], -1),
]:
    sol = Solution()
    actual = sol.findLUSlength(strs)
    print("The length of the LUS in", strs, "->", actual)
    assert actual == expected
