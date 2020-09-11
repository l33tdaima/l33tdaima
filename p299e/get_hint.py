from collections import Counter


class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        count = Counter(secret)
        bulls, cows = 0, 0
        for cs, cg in zip(secret, guess):
            if cs == cg:
                bulls += 1
                count[cg] -= 1
        for cs, cg in zip(secret, guess):
            if cs != cg and count[cg] > 0:
                cows += 1
                count[cg] -= 1
        return f"{bulls}A{cows}B"

    def getHintV2(self, secret: str, guess: str) -> str:
        A = sum(a == b for a, b in zip(secret, guess))
        B = Counter(secret) & Counter(guess)
        return f"{A}A{sum(B.values()) - A}B"


# TESTS
tests = [
    ("1807", "7810", "1A3B"),
    ("1123", "0111", "1A1B"),
    ("1122", "2211", "0A4B"),
    ("1122", "1222", "3A0B"),
]
for secret, guess, expected in tests:
    sol = Solution()
    actual = sol.getHint(secret, guess)
    print("Hint guessing", secret, "using", guess, "->", actual)
    assert actual == expected
    assert expected == sol.getHintV2(secret, guess)
