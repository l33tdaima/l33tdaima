from collections import Counter


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        target_counter = Counter(s1)
        left, right, count = 0, 0, len(s1)
        while right < len(s2):
            if target_counter[s2[right]] > 0:
                count -= 1
            target_counter[s2[right]] -= 1
            right += 1
            if count == 0:
                return True
            if right - left == len(s1):
                if target_counter[s2[left]] >= 0:
                    count += 1
                target_counter[s2[left]] += 1
                left += 1
        return False


# TESTS
tests = [
    ("a", "bcdeafgh", True),
    ("a", "bcdefgh", False),
    ("ab", "eidbaooo", True),
    ("ab", "eidboaoo", False),
]
for t in tests:
    sol = Solution()
    actual = sol.checkInclusion(t[0], t[1])
    print("If", t[1], "contains the permutation of", t[0], "->", actual)
