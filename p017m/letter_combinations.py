from typing import List


class Solution:
    mapping = {
        "0": [],
        "1": [],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0 or digits == "1":
            return []
        ans = [""]
        for i, d in enumerate(digits):
            while len(ans[0]) == i:
                base = ans.pop(0)
                for c in Solution.mapping[d]:
                    ans.append(base + c)
        return ans


## TESTS
for digits, expected in [
    ("", []),
    ("1", []),
    ("2", ["a", "b", "c"]),
    ("23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]),
    (
        "357",
        [
            "djp",
            "djq",
            "djr",
            "djs",
            "dkp",
            "dkq",
            "dkr",
            "dks",
            "dlp",
            "dlq",
            "dlr",
            "dls",
            "ejp",
            "ejq",
            "ejr",
            "ejs",
            "ekp",
            "ekq",
            "ekr",
            "eks",
            "elp",
            "elq",
            "elr",
            "els",
            "fjp",
            "fjq",
            "fjr",
            "fjs",
            "fkp",
            "fkq",
            "fkr",
            "fks",
            "flp",
            "flq",
            "flr",
            "fls",
        ],
    ),
]:
    sol = Solution()
    actual = sol.letterCombinations(digits)
    print("Letter combinations of", digits, "->", actual)
    assert actual == expected
