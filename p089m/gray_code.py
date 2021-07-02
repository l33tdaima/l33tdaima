from typing import List


class Solution:
    def grayCode(self, n: int) -> List[int]:
        ans = [0]
        for i in range(n):
            ans += [n | (1 << i) for n in ans[::-1]]
        return ans


for n in range(5):
    sol = Solution()
    print("Gray code of", n, "->", sol.grayCode(n))
