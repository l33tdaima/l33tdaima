from itertools import zip_longest


class Solution:
    def addToArrayFormV1(self, num: list[int], k: int) -> list[int]:
        karray, carry, ans = list(str(k)), 0, []
        for a, b in zip_longest(num[::-1], karray[::-1]):
            b = int(b) if b else 0
            ans.append((a + b + carry) % 10)
            carry = (a + b + carry) // 10
        if carry > 0:
            ans.append(carry)
        return ans[::-1]

    def addToArrayFormV2(self, num: list[int], k: int) -> list[int]:
        ans = []
        for n in num[::-1]:
            ans.append((n + k) % 10)
            k = (n + k) // 10
        return [int(i) for i in str(k)] + ans[::-1] if k else ans[::-1]


# TESTS
for num, k, expected in [
    ([1, 2, 0, 0], 34, [1, 2, 3, 4]),
    ([2, 7, 4], 181, [4, 5, 5]),
    ([2, 1, 5], 806, [1, 0, 2, 1]),
]:
    sol = Solution()
    actual = sol.addToArrayFormV2(num, k)
    print(num, "+", k, "->", actual)
    assert actual == expected
    assert expected == sol.addToArrayFormV1(num, k)
