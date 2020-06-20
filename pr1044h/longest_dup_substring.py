from functools import reduce


class Solution:
    def longestDupSubstringV1(self, S: str) -> str:
        substr_set = set()
        ans = ""
        for i in range(len(S)):
            for j in range(i + 1, len(S) + 1):
                if S[i:j] in substr_set:
                    if j - i > len(ans):
                        ans = S[i:j]
                else:
                    substr_set.add(S[i:j])
        return ans

    def longestDupSubstringV2(self, S: str) -> str:
        def test(L: int) -> int:
            seen = set()
            for i in range(len(S) - L + 1):
                if S[i : i + L] in seen:
                    return i
                seen.add(S[i : i + L])

        res, lo, hi = 0, 0, len(S)
        while lo < hi:
            mi = (lo + hi) // 2 + 1
            pos = test(mi)
            if pos:
                lo = mi
                res = pos
            else:
                hi = mi - 1
        return S[res : res + lo]

    def longestDupSubstringV3(self, S: str) -> str:
        A = [ord(c) - ord("a") for c in S]
        mod = 2 ** 63 - 1

        def test(L):
            p = pow(26, L, mod)
            cur = reduce(lambda x, y: (x * 26 + y) % mod, A[:L], 0)
            seen = {cur}
            for i in range(L, len(S)):
                cur = (cur * 26 + A[i] - A[i - L] * p) % mod
                if cur in seen:
                    return i - L + 1
                seen.add(cur)

        res, lo, hi = 0, 0, len(S)
        while lo < hi:
            mi = (lo + hi) // 2 + 1
            pos = test(mi)
            if pos:
                lo = mi
                res = pos
            else:
                hi = mi - 1
        return S[res : res + lo]


# TESTS
tests = [
    ("banana", "ana"),
    ("abcd", ""),
]
for t in tests:
    sol = Solution()
    actual = sol.longestDupSubstringV3(t[0])
    print("Longest duplicate substring in", t[0], "->", actual)
    assert actual == t[1]
