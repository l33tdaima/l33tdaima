class Solution:
    def findIntegers(self, n: int) -> int:
        # binary strings of length i without consecutive 1s is fibonacci numbers
        f = [1, 2]
        for i in range(2, 30):
            f.append(f[-1] + f[-2])

        # last_seen tells us if there was a one right before.
        # If that is the case, we should break the loop
        ans, last_seen = 0, 0
        for i in range(30)[::-1]:
            if (1 << i) & n:  # is the ith bit set?
                ans += f[i]
                if last_seen:
                    ans -= 1
                    break
                last_seen = 1
            else:
                last_seen = 0
        return ans + 1


# TESTS
for n, expected in [
    (5, 5),
    (1, 2),
    (2, 3),
    (5318967, 67582),
]:
    sol = Solution()
    actual = sol.findIntegers(n)
    print(f"# in range [0, {n}] with no consecutive 1s in binary -> {actual}")
    assert actual == expected

