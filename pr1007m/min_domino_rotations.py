from typing import List, Tuple


class Solution:
    def minDominoRotationsV1(self, A: List[int], B: List[int]) -> int:
        NOT_FOUND = 30000
        # assert len(A) == len(B) >= 2
        def match(target: int, top: bool) -> int:
            swaps = 0
            for a, b in zip(A[1:], B[1:]):
                if (top and a == target) or (not top and b == target):
                    continue
                elif (top and b == target) or (not top and a == target):
                    swaps += 1
                else:
                    return NOT_FOUND
            return swaps

        swaps = min(
            match(A[0], True),
            1 + match(B[0], True),
            match(B[0], False),
            1 + match(A[0], False),
        )
        return swaps if swaps < NOT_FOUND else -1

    def minDominoRotationsV2(self, A, B):
        for x in [A[0], B[0]]:
            if all(x in d for d in zip(A, B)):
                return len(A) - max(A.count(x), B.count(x))
        return -1


# TESTS
for A, B, expected in [
    ([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2], 2),
    ([3, 5, 1, 2, 3], [3, 6, 3, 3, 4], -1),
]:
    sol = Solution()
    actual = sol.minDominoRotations(A, B)
    print("The minimum number of rotations in", A, B, "->", actual)
    assert actual == expected
