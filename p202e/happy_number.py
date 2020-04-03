class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()
        while n != 1:
            if n in visited:
                return False
            visited.add(n)
            nextn = 0
            while n != 0:
                r = n % 10
                nextn += r * r
                n = n // 10
            n = nextn
        return True


# TESTS
tests = [(19, True), (1, True), (3, False)]
for t in tests:
    sol = Solution()
    actual = sol.isHappy(t[0])
    print("Is", t[0], "a happy number? ->", actual)
    assert actual == t[1]
