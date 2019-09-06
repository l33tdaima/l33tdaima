class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = [None] * 128
        start, ans = -1, 0
        for i, c in enumerate(s):
            code = ord(c)
            if char_map[code] != None:
                start = max(start, char_map[code])
            char_map[code] = i
            ans = max(ans, i - start)
        return ans


# TEST
tests = [
    ["", 0],
    ["abcabcbb", 3],
    ["bbbbb", 1],
    ["pwwkew", 3],
    ["c", 1],
    ["abba", 2],
]
for t in tests:
    sol = Solution()
    actual = sol.lengthOfLongestSubstring(t[0])
    print("Length of longest substring of", t[0], "->", actual)
    assert actual == t[1]

