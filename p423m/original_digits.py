from collections import Counter


class Solution:
    """
    "zero": 0, 'z'
    "two": 2, 'w'
    "four": 4, 'u'
    "six": 6, 'x'
    "eight": 8, 'g'
    "three": 3, count('h') - count(8)
    "five": 5, count('f') - count(4)
    "seven": 7, count('s') - count(6)
    "nine": 9, count('i') - count(6) - count(8) - count(5)
    "one": 1, count('o') - count(0) - count(2) - count(4)
    """

    def originalDigits(self, s: str) -> str:
        sc, dc = Counter(s), [0] * 10
        dc[0], dc[2], dc[4], dc[6], dc[8] = (
            sc["z"],
            sc["w"],
            sc["u"],
            sc["x"],
            sc["g"],
        )
        dc[3] = sc["h"] - dc[8]
        dc[5] = sc["f"] - dc[4]
        dc[7] = sc["s"] - dc[6]
        dc[9] = sc["i"] - dc[6] - dc[8] - dc[5]
        dc[1] = sc["o"] - dc[0] - dc[2] - dc[4]
        return "".join(str(i) * c for i, c in enumerate(dc) if c > 0)


# TESTS
for s, expected in [
    ("owoztneoer", "012"),
    ("fviefuro", "45"),
    ("fviefuro", "45"),
    ("fvieeifurovf", "455"),
]:
    sol = Solution()
    actual = sol.originalDigits(s)
    print("Original digits of", s, "->", actual)
    assert actual == expected
