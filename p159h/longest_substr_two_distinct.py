class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        char_counter = 256 * [0]
        ans, start, distinct = 0, 0, 0
        for end in range(len(s)):
            if char_counter[ord(s[end])] == 0:
                distinct += 1
            char_counter[ord(s[end])] += 1
            while distinct > 2:
                char_counter[ord(s[start])] -= 1
                if char_counter[ord(s[start])] == 0:
                    distinct -= 1
                start += 1
            ans = max(ans, end - start + 1)
        return ans


## TESTS
tests = [
    ("eceba", 3),
    ("ccaabbb", 5),
    ("CCCCC", 5),
    ("abcde", 2),
    ("CODEaaaabbbbcde", 8),
]
for t in tests:
    sol = Solution()
    actual = sol.lengthOfLongestSubstringTwoDistinct(t[0])
    print(
        "Longest substring length in '"
        + t[0]
        + "' with at most two distincts ->",
        actual,
    )
    assert actual == t[1]

