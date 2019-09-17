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
tests = [
    ["ADOBECODEBANC", "ADE", "DEBA"],
    ["ADOBECODEBANC", "AA", "ADOBECODEBA"],
    ["ADOBECODEBANC", "bB", ""],
    ["AABCDE", "ABC", "ABC"],
]
for t in tests:
    sol = Solution()
    actual = sol.minWindow(t[0], t[1])
    print(
        "Minimal window in '"
        + t[0]
        + "' containing the target '"
        + t[1]
        + "' ->",
        actual,
    )
    assert actual == t[2]
