class Solution:
    def isPalindrome(self, s: str) -> bool:
        lo, hi = 0, len(s) - 1
        while lo < hi:
            if not s[lo].isalnum():
                lo += 1
            elif not s[hi].isalnum():
                hi -= 1
            else:
                if s[lo].lower() != s[hi].lower():
                    return False
                lo, hi = lo + 1, hi - 1
        return True


# TESTS
tests = [
    ["", True],
    ["A man, a plan, a canal: Panama", True],
    ["race a car", False],
    ["0P", False],
]
for t in tests:
    sol = Solution()
    print('Is "' + t[0] + '" palindrome? ->', t[1])
    assert sol.isPalindrome(t[0]) == t[1]
