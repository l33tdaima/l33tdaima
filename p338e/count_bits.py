class Solution:
    def countBits(self, n: int) -> list[int]:
        ans = [0] * (n + 1)
        for i in range(1, n + 1):
            ans[i] = ans[i >> 1] + (i % 2)
        return ans


# TESTS
for n in range(21):
    sol = Solution()
    print("Number of 1's in", n, "->", sol.countBits(n))
