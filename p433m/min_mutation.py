class Solution:
    def minMutation(self, start: str, end: str, bank: list[str]) -> int:
        bank_set = set(bank)
        queue, seen = [(start, 0)], {start}
        while queue:
            curr, step = queue.pop(0)
            if curr == end:
                return step

            for i in range(8):
                for c in "ACGT":
                    mut = curr[:i] + c + curr[i + 1 :]
                    if mut not in seen and mut in bank_set:
                        queue.append((mut, step + 1))
                        seen.add(curr)
        return -1


# TESTS
for start, end, bank, expected in [
    ("AACCGGTT", "AACCGGTA", ["AACCGGTA"], 1),
    ("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"], 2),
    ("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"], 3),
]:
    sol = Solution()
    actual = sol.minMutation(start, end, bank)
    print("The minimum # of mutations from", start, "to", end, "->", actual)
    assert actual == expected
