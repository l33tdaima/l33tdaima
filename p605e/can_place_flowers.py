class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        flowerbed = [0] + flowerbed + [0]
        for i in range(1, len(flowerbed) - 1):
            if flowerbed[i - 1] == flowerbed[i] == flowerbed[i + 1] == 0:
                n, flowerbed[i] = n - 1, 1
                if n == 0:
                    return True
        return n <= 0


# TESTS
for flowerbed, n, expected in [
    ([0], 1, True),
    ([0, 0], 1, True),
    ([1, 0, 1], 1, False),
    ([1, 0, 0, 0, 1], 1, True),
    ([1, 0, 0, 0, 1], 2, False),
]:
    sol = Solution()
    actual = sol.canPlaceFlowers(flowerbed, n)
    print(n, "flowers can be planted in", flowerbed, "->", actual)
    assert actual == expected
