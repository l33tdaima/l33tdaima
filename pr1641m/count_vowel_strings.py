from typing import List
from itertools import accumulate


class Solution:
    def countVowelStringsDP(self, n: int) -> int:
        def helper(n: int) -> List[int]:
            if n == 1:
                return [1] * 5
            return list(accumulate(helper(n - 1)))
            # OR return reduce(lambda x, y: x + [x[-1] + y], helper(n - 1), [0])[1:]

        return sum(helper(n))

    def countVowelStringsCombi(self, n: int) -> int:
        return (n + 4) * (n + 3) * (n + 2) * (n + 1) // 24


# TESTS
for n, expected in [(1, 5), (2, 15), (3, 35), (4, 70), (33, 66045)]:
    sol = Solution()
    actual = sol.countVowelStringsDP(n)
    print("Sorted Vowel Strings of length", n, "->", actual)
    assert actual == expected
    assert expected == sol.countVowelStringsCombi(n)
