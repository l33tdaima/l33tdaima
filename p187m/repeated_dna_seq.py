from typing import List


class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        ans, seen = set(), set()
        for i in range(len(s) - 9):
            ten = s[i : i + 10]
            if ten in seen:
                ans.add(ten)
            else:
                seen.add(ten)
        return list(ans)


# TESTS
for s, expected in [
    ("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC", "CCCCCAAAAA"]),
    ("AAAAAAAAAAAAA", ["AAAAAAAAAA"]),
]:
    sol = Solution()
    actual = sol.findRepeatedDnaSequences(s)
    print("All repeated 10-letter-long sequences in", s, "->", actual)
    assert sorted(actual) == expected
