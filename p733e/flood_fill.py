from typing import List


DIR = [(-1, 0), (0, -1), (1, 0), (0, 1)]


class Solution:
    def floodFill(
        self, image: List[List[int]], sr: int, sc: int, newColor: int
    ) -> List[List[int]]:
        oldColor = image[sr][sc]
        if oldColor == newColor:
            return image
        NR, NC = len(image), len(image[0])

        def recHelper(r: int, c: int) -> None:
            image[r][c] = newColor
            for dr, dc in DIR:
                nr, nc = r + dr, c + dc
                if 0 <= nr < NR and 0 <= nc < NC and image[nr][nc] == oldColor:
                    recHelper(nr, nc)

        recHelper(sr, sc)
        return image


# TESTS
tests = [
    {
        "image": [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
        "sr": 1,
        "sc": 1,
        "newColor": 2,
        "newImage": [[2, 2, 2], [2, 2, 0], [1, 0, 1]],
    },
    {
        "image": [[1, 0, 0], [0, 1, 0], [1, 0, 1]],
        "sr": 0,
        "sc": 0,
        "newColor": 2,
        "newImage": [[2, 0, 0], [0, 1, 0], [1, 0, 1]],
    },
]

for t in tests:
    sol = Solution()
    actual = sol.floodFill(t["image"], t["sr"], t["sc"], t["newColor"])
    print(actual)
