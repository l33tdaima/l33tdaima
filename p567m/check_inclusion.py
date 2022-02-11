from collections import Counter


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        target_counter = Counter(s1)
        l, r, count = 0, 0, len(s1)
        while r < len(s2):
            if target_counter[s2[r]] > 0:
                count -= 1
            target_counter[s2[r]] -= 1
            r += 1
            if count == 0:
                return True
            if r - l == len(s1):
                if target_counter[s2[l]] >= 0:
                    count += 1
                target_counter[s2[l]] += 1
                l += 1
        return False


# TESTS
for s1, s2, expected in [
    ("a", "bcdeafgh", True),
    ("a", "bcdefgh", False),
    ("ab", "eidbaooo", True),
    ("ab", "eidboaoo", False),
]:
    sol = Solution()
    actual = sol.checkInclusion(s1, s2)
    print("If", s2, "contains the permutation of", s1, "->", actual)
    assert actual == expected
