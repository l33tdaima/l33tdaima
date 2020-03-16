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
        for i in range(len(digits)):
            d = digits[i]
            while len(ans[0]) == i:
                base = ans.pop(0)
                for c in Solution.mapping[d]:
                    ans.append(base + c)
        return ans


## TESTS
tests = ["", "1", "3", "23", "357", "2468"]
for t in tests:
    sol = Solution()
    print(t, "->", ",".join(sol.letterCombinations(t)))

