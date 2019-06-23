class Solution:
    def divisorGame(self, N: int) -> bool:
        return N % 2 == 0

    def divisorGameDP(self, N: int) -> bool:
        dp = [False for i in range(N + 1)]
        for n in range(N + 1):
            for fact in range(1, n // 2 + 1):
                if n % fact == 0 and (not dp[n - fact]):
                    dp[n] = True
                    break
        return dp[N]
# TESTS
for N in range(1, 10):
    sol = Solution()
    print("Alice can win for N =", N, "->", sol.divisorGameDP(N))
