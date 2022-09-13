class Solution:
    def validUtf8(self, data: list[int]) -> bool:
        count = 0
        for byte in data:
            if count == 0:
                if (byte >> 5) == 0b110:
                    count = 1
                elif (byte >> 4) == 0b1110:
                    count = 2
                elif (byte >> 3) == 0b11110:
                    count = 3
                elif byte & 0b10000000:
                    return False
            else:
                if (byte >> 6) != 0b10:
                    return False
                count -= 1
        return count == 0


# TESTS
for data, expected in [
    ([197, 130, 1], True),
    ([235, 140, 4], False),
]:
    sol = Solution()
    actual = sol.validUtf8(data)
    assert actual == expected
