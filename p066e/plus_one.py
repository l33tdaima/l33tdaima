from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry, ans = 1, []
        for d in digits[::-1]:
            ans.append((d + carry) % 10)
            carry = (d + carry) // 10
        if carry > 0:
            ans.append(carry)
        return ans[::-1]


# TESTS
tests = [
    [[0], [1]],
    [[5], [6]],
    [[1, 2, 3], [1, 2, 4]],
    [[1, 0, 0], [1, 0, 1]],
    [[3, 8, 9, 4], [3, 8, 9, 5]],
    [[3, 8, 4, 9], [3, 8, 5, 0]],
    [[9, 9, 9, 9], [1, 0, 0, 0, 0]],
]
for t in tests:
    sol = Solution()
    actual = sol.plusOne(t[0])
    print("Plus one to", t[0], "->", actual)
    assert actual == t[1]
