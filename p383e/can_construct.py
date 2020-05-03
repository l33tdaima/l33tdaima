from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        counter = Counter(magazine)
        for c in ransomNote:
            if c not in counter or counter[c] <= 0:
                return False
            counter[c] -= 1
        return True


# TESTS
tests = [("a", "b", False), ("aa", "ab", False), ("aa", "aab", True)]
for t in tests:
    sol = Solution()
    actual = sol.canConstruct(t[0], t[1])
    print(f'canConstruct("{t[0]}", "{t[1]}") ->', actual)
    assert actual == t[2]
