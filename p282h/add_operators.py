from typing import List


class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        ans = []

        def backtrack(pos, path, val, prev) -> None:
            if pos == len(num) and val == target:
                ans.append(path)
                return
            for i in range(pos, len(num)):
                if i > pos and num[pos] == "0":  # skip "00*"
                    break
                n = int(num[pos : i + 1])
                if pos > 0:
                    backtrack(i + 1, f"{path}+{n}", val + n, n)
                    backtrack(i + 1, f"{path}-{n}", val - n, -n)
                    backtrack(i + 1, f"{path}*{n}", val - prev + prev * n, prev * n)
                else:
                    backtrack(i + 1, f"{n}", n, n)

        backtrack(0, "", 0, None)
        return ans


# TESTS
for num, target, expected in [
    ("123", 6, ["1+2+3", "1*2*3"]),
    ("232", 8, ["2*3+2", "2+3*2"]),
    ("105", 5, ["1*0+5", "10-5"]),
    ("00", 0, ["0*0", "0+0", "0-0"]),
    ("3456237490", 9191, []),
]:
    sol = Solution()
    actual = sol.addOperators(num, target)
    print("Expression from", num, "evluates to", target, "->", actual)
    assert sorted(actual) == sorted(expected)
