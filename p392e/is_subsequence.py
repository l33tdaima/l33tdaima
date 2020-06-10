from collections import defaultdict
from typing import List


class Solution:
    def isSubsequenceV1(self, s: str, t: str) -> bool:
        i = 0
        for c in s:
            while i < len(t) and t[i] != c:
                i += 1
            if i == len(t):
                return False
            i += 1
        return True

    def isSubsequenceV2(self, s: str, t: str) -> bool:
        remainder_of_t = iter(t)
        for c in s:
            if c not in remainder_of_t:
                return False
        return True

    def isSubsequenceFollowup(self, s: str, t: str) -> bool:
        occurrence = defaultdict(list)
        for i, c in enumerate(t):
            occurrence[c].append(i)

        # Binary search for the next value after x
        def binary_search(xs: List[int], x: int) -> int:
            l, r = 0, len(xs) - 1
            while l < r:
                m = (l + r) // 2
                if xs[m] < x:
                    l = m + 1
                else:
                    r = m
            return l if l < len(xs) and xs[l] >= x else len(xs)

        t_pos = 0
        for c in s:
            i = binary_search(occurrence[c], t_pos)
            if i >= len(occurrence[c]):
                return False
            t_pos = occurrence[c][i] + 1
        return True


# TESTS
tests = [
    ("a", "zzb", False),
    ("a", "bbbbbbba", True),
    ("abc", "ahbgdc", True),
    ("axc", "ahbgdc", False),
    ("aaaaaa", "bbaaaa", False),
]
for t in tests:
    sol = Solution()
    actual = sol.isSubsequenceV2(t[0], t[1])
    print(f"Is '{t[0]}' a subsequence of {t[1]}? -> {actual}")
    assert actual == t[2]
    assert t[2] == sol.isSubsequenceFollowup(t[0], t[1])
