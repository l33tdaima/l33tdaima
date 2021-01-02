from typing import List


class Solution:
    def canFormArrayV1(self, arr: List[int], pieces: List[List[int]]) -> bool:
        val_index = {v: i for i, v in enumerate(arr)}
        visited = [1 for _ in arr]
        for piece in pieces:
            if piece[0] not in val_index:
                return False
            l = val_index[piece[0]]
            if arr[l : l + len(piece)] != piece:
                return False
            for i in range(l, l + len(piece)):
                visited[i] = 0
        return sum(visited) == 0

    def canFormArrayV2(self, arr: List[int], pieces: List[List[int]]) -> bool:
        head_piece = {p[0]: p for p in pieces}
        target = []
        for v in arr:
            target += head_piece.get(v, [])
        return target == arr


# TESTS
for arr, pieces, expected in [
    ([85], [[85]], True),
    ([15, 88], [[88], [15]], True),
    ([49, 18, 16], [[16, 18, 49]], False),
    ([91, 4, 64, 78], [[78], [4, 64], [91]], True),
    ([1, 3, 5, 7], [[2, 4, 6, 8]], False),
]:
    sol = Solution()
    actual = sol.canFormArrayV2(arr, pieces)
    print("Can", pieces, "form array", arr, "->", actual)
    assert actual == expected
    assert sol.canFormArrayV1(arr, pieces) == expected
