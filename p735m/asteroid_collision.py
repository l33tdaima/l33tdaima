from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for n in asteroids:
            while n < 0 and len(stack) > 0 and stack[-1] > 0:
                if n + stack[-1] == 0:
                    stack.pop()
                    break
                elif n + stack[-1] < 0:
                    stack.pop()
                else:
                    break
            else:
                stack.append(n)
        return stack


# TESTS
for asteroids, expected in [
    ([5, 10, -5], [5, 10]),
    ([8, -8], []),
    ([10, 2, -5], [10]),
    ([-2, -1, 1, 2], [-2, -1, 1, 2]),
    ([1, 2, -4, 3], [-4, 3]),
]:
    sol = Solution()
    actual = sol.asteroidCollision(asteroids)
    print("After all collisions in", asteroids, "->", actual)
    assert actual == expected
