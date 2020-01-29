# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
def isBadVersion(version: int) -> bool:
    return version >= 4


class Solution:
    def firstBadVersion(self, n: int) -> int:
        l, r = 1, n
        while l < r:
            m = l + (r - l) // 2
            if isBadVersion(m):
                r = m
            else:
                l = m + 1
        return l


# TESTS
sol = Solution()
actual = sol.firstBadVersion(34)
print("The first bad version is", actual)
