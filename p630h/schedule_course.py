from typing import List
from heapq import heappush, heappop


class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
        courses = sorted(courses, key=lambda c: (c[1], c[0]))
        t, max_heap = 0, []
        for dur, last in courses:
            t += dur
            heappush(max_heap, -dur)
            if t > last:
                t -= -heappop(max_heap)
        return len(max_heap)


# TESTS
for courses, expected in [
    ([[100, 200], [200, 1300], [1000, 1250], [2000, 3200]], 3),
    ([[1, 2]], 1),
    ([[3, 2], [4, 3]], 0),
    ([[100, 2], [32, 50]], 1),
]:
    sol = Solution()
    actual = sol.scheduleCourse(courses)
    print("The maximum number of courses you can take from", courses, "->", actual)
    assert actual == expected
