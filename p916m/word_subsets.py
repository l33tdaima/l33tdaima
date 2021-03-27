from typing import List
from collections import Counter


class Solution:
    def wordSubsets(self, A: List[str], B: List[str]) -> List[str]:
        counter = Counter()
        for b in B:
            # union of counter will take the maximum count of recurring letter
            counter |= Counter(b)
        return [a for a in A if not (counter - Counter(a))]


# TESTS
for A, B, expected in [
    (
        ["amazon", "apple", "facebook", "google", "leetcode"],
        ["e", "o"],
        ["facebook", "google", "leetcode"],
    ),
    (
        ["amazon", "apple", "facebook", "google", "leetcode"],
        ["l", "e"],
        ["apple", "google", "leetcode"],
    ),
    (
        ["amazon", "apple", "facebook", "google", "leetcode"],
        ["e", "oo"],
        ["facebook", "google"],
    ),
    (
        ["amazon", "apple", "facebook", "google", "leetcode"],
        ["lo", "eo"],
        ["google", "leetcode"],
    ),
    (
        ["amazon", "apple", "facebook", "google", "leetcode"],
        ["ec", "oc", "ceo"],
        ["facebook", "leetcode"],
    ),
]:
    sol = Solution()
    actual = sol.wordSubsets(A, B)
    print("All universal words ->", actual)
    assert actual == expected
