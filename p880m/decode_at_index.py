class Solution:
    def decodeAtIndexTLE(self, S: str, K: int) -> str:
        decoded = []
        for c in S:
            if c.isalpha():
                decoded.append(c)
                if len(decoded) == K:
                    return decoded[-1]
            else:
                repeat = int(c) - 1
                while repeat > 0:
                    decoded += decoded
                    repeat -= 1
                    if len(decoded) >= K:
                        return decoded[K - 1]
        return ""

    def decodeAtIndex(self, S: str, K: int) -> str:
        N = 0
        for n, c in enumerate(S):
            N = N * int(c) if c.isdigit() else N + 1
            if K <= N:
                break
        for i in range(n, -1, -1):
            if S[i].isdigit():
                N /= int(S[i])
                K %= N
            else:
                if K == N or K == 0:
                    return S[i]
                N -= 1


# TESTS
for S, K, expected in [
    ("leet2code3", 10, "o"),
    ("ha22", 5, "h"),
    ("a2345678999999999999999", 1, "a"),
    ("y959q969u3hb22odq595", 222280369, "y"),
]:
    sol = Solution()
    actual = sol.decodeAtIndex(S, K)
    print("The", K, "th letter in the decoded string", S, "->", actual)
    assert actual == expected
