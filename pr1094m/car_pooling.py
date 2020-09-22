from typing import List


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        timestamp = [0] * 1001
        for [p, s, e] in trips:
            timestamp[s] += p
            timestamp[e] -= p
        passengers = 0
        for dp in timestamp:
            passengers += dp
            if passengers > capacity:
                return False
        return True


# TESTS
tests = [
    ([[2, 1, 5], [3, 3, 7]], 4, False),
    ([[2, 1, 5], [3, 3, 7]], 5, True),
    ([[2, 1, 5], [3, 5, 7]], 3, True),
    ([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11, True),
    ([[1, 8, 10], [3, 2, 7], [3, 6, 9], [8, 3, 9]], 14, True),
    ([[9, 3, 6], [8, 1, 7], [6, 6, 8], [8, 4, 9], [4, 2, 9]], 28, False),
]
for trips, capacity, expected in tests:
    sol = Solution()
    actual = sol.carPooling(trips, capacity)
    print("Trips", trips, ", capacity", capacity, "->", actual)
    assert actual == expected

