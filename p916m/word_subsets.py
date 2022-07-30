from collections import Counter


class Solution:
    def wordSubsets(self, words1: list[str], words2: list[str]) -> list[str]:
        counter = Counter()
        for b in words2:
            # union of counter will take the maximum count of recurring letter
            counter |= Counter(b)
        return [a for a in words1 if not (counter - Counter(a))]


# TESTS
for words1, words2, expected in [
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
    actual = sol.wordSubsets(words1, words2)
    print("All universal words ->", actual)
    assert actual == expected
