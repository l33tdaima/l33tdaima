class Solution:
    def lengthOfLongestSubstringV1(self, s: str) -> int:
        char_map = [None] * 128
        start, ans = -1, 0
        for i, c in enumerate(s):
            code = ord(c)
            if char_map[code] != None:
                start = max(start, char_map[code])
            char_map[code] = i
            ans = max(ans, i - start)
        return ans

    def lengthOfLongestSubstringV2(self, s: str) -> int:
        char_map, start, ans = {}, -1, 0
        for i, c in enumerate(s):
            if c in char_map:
                start = max(start, char_map[c])
            char_map[c] = i
            ans = max(ans, i - start)
        return ans


# TEST
for s, expected in [
    ["", 0],
    ["abcabcbb", 3],
    ["bbbbb", 1],
    ["pwwkew", 3],
    ["c", 1],
    ["abba", 2],
]:
    sol = Solution()
    actual = sol.lengthOfLongestSubstringV2(s)
    print("Length of longest substring of", s, "->", actual)
    assert actual == expected

