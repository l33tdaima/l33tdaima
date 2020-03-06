from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate, counter = None, 0
        for n in nums:
            if counter == 0:
                candidate = n
            counter = counter + 1 if candidate == n else counter - 1
        return candidate


# TESTS
tests = [
    [[1], 1],
    [[1, 2, 1], 1],
    [[1, 2, 3, 2, 2], 2],
    [[3, 3, 1, 3, 2, 2, 3], 3],
]

for t in tests:
    sol = Solution()
    actual = sol.majorityElement(t[0])
    print("Majority element in", t[0], "->", actual)
    assert actual == t[1]
