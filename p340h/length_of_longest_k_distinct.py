from collections import defaultdict


class Solution:
    def lengthOfLongestSubstringKDistinctSlow(self, s: str, k: int) -> int:
        ans, start, end = 0, 0, 0
        char_counter = defaultdict(int)
        while start < len(s) and end < len(s):
            distinct = len(char_counter)
            if distinct < k or (distinct == k and s[end] in char_counter):
                char_counter[s[end]] += 1
                ans = max(ans, end - start + 1)
                end += 1
            else:
                if char_counter[s[start]] == 1:
                    del char_counter[s[start]]
                else:
                    char_counter[s[start]] -= 1
                start += 1
        return ans

    def lengthOfLongestSubstringKDistinctFast(self, s: str, k: int) -> int:
        ans, start, distinct = 0, 0, 0
        char_counter = 256 * [0]
        for end in range(len(s)):
            char_counter[ord(s[end])] += 1
            if char_counter[ord(s[end])] == 1:
                distinct += 1
            while distinct > k:
                char_counter[ord(s[start])] -= 1
                if char_counter[ord(s[start])] == 0:
                    distinct -= 1
                start += 1
            ans = max(ans, end - start + 1)
        return ans


## TESTS
tests = [
    ("a", 0, 0),
    ("eceba", 2, 3),
    ("eceejk", 2, 4),
    ("eeeeeee", 2, 7),
    ("abcdefgh", 1, 1),
    ("abcdefgh", 3, 3),
    ("ecebaxyxyfeaeeeeeee", 5, 15),
]
for t in tests:
    sol = Solution()
    actual = sol.lengthOfLongestSubstringKDistinctFast(t[0], t[1])
    print(
        f"Length of the longest substring with at most {t[1]} distinct characters in {t[0]} ->",
        actual,
    )
    assert actual == t[2]

