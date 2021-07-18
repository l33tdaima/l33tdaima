from typing import List


class Solution:
    def threeEqualParts(self, arr: List[int]) -> List[int]:
        N, n_of_ones = len(arr), sum(arr)
        # check for corner cases
        if n_of_ones == 0:
            return [0, N - 1]
        if n_of_ones % 3 != 0:
            return [-1, -1]
        # Find the beginning of each part
        idx_of_ones = [i for i, v in enumerate(arr) if v == 1]
        k = n_of_ones // 3
        a, b, c = idx_of_ones[0], idx_of_ones[k], idx_of_ones[2 * k]
        # then verify
        while c < N and arr[a] == arr[b] == arr[c]:
            a, b, c = a + 1, b + 1, c + 1
        return [a - 1, b] if c == N else [-1, -1]


# TESTS
for arr, expected in [
    ([1, 0, 1, 0, 1], [0, 3]),
    ([1, 1, 0, 1, 1], [-1, -1]),
    ([1, 1, 0, 0, 1], [0, 2]),
]:
    sol = Solution()
    actual = sol.threeEqualParts(arr)
    print("Three equal parts indices of", arr, "->", actual)
    assert actual == expected
