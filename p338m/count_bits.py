from typing import List


class Solution:
    def countBits(self, num: int) -> List[int]:
        ans = [0] * (num + 1)
        for n in range(1, num + 1):
            ans[n] = ans[n >> 1] + (n % 2)
        return ans


# TESTS
for n in range(21):
    sol = Solution()
    print("Number of 1's in", n, "->", sol.countBits(n))
