from collections import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        t_map = Counter(t)
        start, counter = 0, len(t)  # chars to be matched
        min_start, min_len = 0, len(s) + 1
        for end, ke in enumerate(s):
            if t_map[ke] > 0:
                counter -= 1
            t_map[ke] -= 1
            while counter == 0:
                if end - start < min_len:
                    min_start, min_len = start, end - start + 1
                if t_map[s[start]] == 0:
                    counter += 1
                t_map[s[start]] += 1
                start += 1
        return s[min_start : min_start + min_len] if min_len <= len(s) else ""


# TEST
for s, t, expected in [
    ["ADOBECODEBANC", "ABC", "BANC"],
    ["ADOBECODEBANC", "ADE", "DEBA"],
    ["ADOBECODEBANC", "AA", "ADOBECODEBA"],
    ["ADOBECODEBANC", "bB", ""],
    ["AABCDE", "ABC", "ABC"],
]:
    sol = Solution()
    actual = sol.minWindow(s, t)
    print("Minimal window in '" + s + "' containing the target '" + s + "' ->", actual)
    assert actual == expected
