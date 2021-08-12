from typing import List
from collections import Counter


class Solution:
    def canReorderDoubledV1(self, arr: List[int]) -> bool:
        counter = Counter(arr)
        for a in sorted(arr):
            if counter[a] <= 0:
                continue
            counter[a] -= 1
            if a < 0:
                h = a // 2
                if a % 2 == 0 and h in counter and counter[h] > 0:
                    counter[h] -= 1
                else:
                    return False
            else:
                d = a * 2
                if d in counter and counter[d] > 0:
                    counter[d] -= 1
                else:
                    return False
        return True

    def canReorderDoubledV2(self, arr: List[int]) -> bool:
        counter = Counter(arr)
        for a in sorted(counter, key=abs):
            if counter[a] > counter[2 * a]:
                return False
            counter[2 * a] -= counter[a]
        return True


# TESTS
for arr, expected in [
    ([3, 1, 3, 6], False),
    ([2, 1, 2, 6], False),
    ([4, -2, 2, -4], True),
    ([1, 2, 4, 16, 8, 4], False),
    ([4, -2, 0, 1, 2, -4], False),
    ([4, -2, 0, 0, 2, -4], True),
    ([2, 1, 2, 1, 1, 1, 2, 2], True),
]:
    sol = Solution()
    actual = sol.canReorderDoubledV1(arr[:])
    print("Can", arr, "reordered doubled ->", actual)
    assert actual == expected
    assert expected == sol.canReorderDoubledV2(arr[:])
