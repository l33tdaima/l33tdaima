class Solution:
    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:
        pigs, product = 0, 1
        while product < buckets:
            product *= minutesToTest // minutesToDie + 1
            pigs += 1
        return pigs


# TESTS
for buckets, minutesToDie, minutesToTest, expected in [
    (4, 15, 15, 2),
    (4, 15, 60, 1),
    (25, 15, 60, 2),
    (1000, 15, 60, 5),
]:
    sol = Solution()
    actual = sol.poorPigs(buckets, minutesToDie, minutesToTest)
    print(
        buckets,
        "buckets,",
        minutesToDie,
        "minutes to die,",
        minutesToTest,
        "minutes to test requires pigs ->",
        actual,
    )
    assert actual == expected
