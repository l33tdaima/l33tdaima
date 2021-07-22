class Solution:
    def pushDominoesSim(self, dominoes: str) -> str:
        prev, curr, N = None, ["."] + list(dominoes) + ["."], len(dominoes)
        while prev != curr:
            prev = curr[:]
            i = 1
            while i <= N:
                if curr[i] == "." and prev[i - 1] == "R" and prev[i + 1] != "L":
                    curr[i], i = "R", i + 1
                i += 1
            i = N
            while i >= 1:
                if curr[i] == "." and prev[i + 1] == "L" and prev[i - 1] != "R":
                    curr[i], i = "L", i - 1
                i -= 1
        return "".join(curr[1:-1])

    def pushDominoes(self, dominoes: str) -> str:
        d, n = list("L" + dominoes + "R"), len(dominoes)
        distr, posr = [n] * (n + 2), -float("Inf")
        for i in range(1, n + 1):
            if d[i] == "R":
                posr = i
            elif d[i] == "L":
                posr = -float("Inf")
            else:
                distr[i] = min(distr[i], i - posr)
        distl, posl = [n] * (n + 2), float("Inf")
        for i in range(1, n + 1)[::-1]:
            if d[i] == "L":
                posl = i
            elif d[i] == "R":
                posl = float("Inf")
            else:
                distl[i] = min(distl[i], posl - i)
                if distl[i] < distr[i]:
                    d[i] = "L"
                elif distr[i] < distl[i]:
                    d[i] = "R"
        return "".join(d[1:-1])


# TESTS
for dominoes, expected in [
    ("RR.L", "RR.L"),
    (".L.R...LR..L..", "LL.RR.LLRRLL.."),
    ("....", "...."),
    ("R...", "RRRR"),
    ("....L", "LLLLL"),
]:
    sol = Solution()
    actual = sol.pushDominoes(dominoes)
    print("Final domino state of", dominoes, "->", actual)
    assert actual == expected
