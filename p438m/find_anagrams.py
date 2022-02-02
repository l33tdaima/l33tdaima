from cmath import exp
from collections import Counter


class Solution:
    # Use collections.Counter's comparator O(k*n)
    def findAnagramsV1(self, s: str, p: str) -> list[int]:
        ans, lenp = [], len(p)
        pcounter = Counter(p)
        scounter = Counter(s[: lenp - 1])
        for i in range(lenp - 1, len(s)):
            scounter[s[i]] += 1
            if scounter == pcounter:
                ans.append(i - lenp + 1)
            scounter[s[i - lenp + 1]] -= 1
            if scounter[s[i - lenp + 1]] == 0:
                del scounter[s[i - lenp + 1]]
        return ans

    # Use two-pointer sliding window O(n)
    def findAnagramsV2(self, s: str, p: str) -> list[int]:
        ans, left, right, count = [], 0, 0, len(p)
        counter = Counter(p)
        while right < len(s):
            if counter[s[right]] > 0:
                count -= 1
            counter[s[right]] -= 1
            right += 1
            if count == 0:
                ans.append(left)
            if right - left == len(p):
                if counter[s[left]] >= 0:
                    count += 1
                counter[s[left]] += 1
                left += 1
        return ans


# TESTS
for s, p, expected in [
    ("cbaebabacd", "abc", [0, 6]),
    ("abab", "abb", [1]),
    ("abab", "ab", [0, 1, 2]),
]:
    sol = Solution()
    actual = sol.findAnagramsV1(s, p)
    print("Find all anagram of", p, "in", s, "->", actual)
    assert actual == expected
    assert sol.findAnagramsV2(s, p) == expected
