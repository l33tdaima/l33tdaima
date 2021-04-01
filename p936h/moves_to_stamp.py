from typing import List


class Solution:
    def movesToStamp(self, stamp: str, target: str) -> List[int]:
        lstamp, S, ltarget, T = list(stamp), len(stamp), list(target), len(target)

        def canStamp(start: int) -> bool:
            ret = False
            for j, s in enumerate(lstamp): 
                if ltarget[start + j] == "?":
                    continue
                if ltarget[start + j] != s:
                    return False
                ret = True
            return ret

        stamped, ans = True, []
        while stamped:
            stamped = False
            for i in range(T - S + 1):
                if canStamp(i):
                    ltarget[i : i + S] = ["?"] * S
                    stamped = True
                    ans.append(i)
                    break
        return ans[::-1] if ltarget == ["?"] * T else []


# TESTS
for stamp, target, expected in [
    ("abc", "ababc", [0, 2]),
    ("abca", "aabcaca", [3, 0, 1]),
    ("abc", "aabccbc", [4, 2, 0, 1]),
]:
    sol = Solution()
    actual = sol.movesToStamp(stamp, target)
    print("Moves to stamp", stamp, "to target", target, "->", actual)
    assert actual == expected
