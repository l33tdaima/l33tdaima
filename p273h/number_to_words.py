class Solution:
    UNITS = ["", "Thousand", "Million", "Billion"]
    DIGITS20 = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ]
    TENS = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ]

    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"

        def convertThousand(n: int) -> str:
            if n < 20:
                return Solution.DIGITS20[n]
            elif n < 100:
                return f"{Solution.TENS[n // 10]} {convertThousand(n % 10)}"
            else:
                return f"{Solution.DIGITS20[n // 100]} Hundred {convertThousand(n % 100)}"

        ans, i = "", 0
        while num > 0:
            if num % 1000 != 0:
                ans = f"{convertThousand(num % 1000).strip()} {Solution.UNITS[i]} {ans}"
            i = i + 1
            num = num // 1000
        return ans.strip()


# TESTS
tests = [
    0,
    4,
    12,
    25,
    40,
    67,
    512,
    700,
    806,
    999,
    1000,
    2002,
    3017,
    4875,
    5107,
    50868,
    66200,
    434901,
    2000000,
    3010203,
    49281309,
    1000000000,
    1000000005,
]
for t in tests:
    sol = Solution()
    print(t, "->", '"' + sol.numberToWords(t) + '"')

