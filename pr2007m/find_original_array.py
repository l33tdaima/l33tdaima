from collections import Counter
from tokenize import Double


class Solution:
    def findOriginalArray(self, changed: list[int]) -> list[int]:
        if len(changed) % 2 != 0:
            return []
        seen, original = Counter(changed), []
        for n in sorted(changed, reverse=True):
            if n in seen and n % 2 == 0 and n // 2 in seen:
                original.append(n // 2)
                seen[n] -= 1
                if seen[n] == 0:
                    del seen[n]
                seen[n // 2] -= 1
                if seen[n // 2] == 0:
                    del seen[n // 2]

        return original if len(seen) == 0 else []


# TESTS
for changed, original in [
    ([1, 3, 4, 2, 6, 8], [1, 3, 4]),
    ([6, 3, 0, 1], []),
    ([1], []),
    ([1, 3, 4, 2, 6, 8, 2, 4], [1, 2, 3, 4]),
    ([1, 1, 2, 2], [1, 1]),
    ([0, 0, 1, 1, 2, 2, 0, 0], [0, 0, 1, 1]),
]:
    sol = Solution()
    actual = sol.findOriginalArray(changed)
    print("The original of the doubled array", changed, "->", actual)
    assert sorted(actual) == sorted(original)
