from typing import List


class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        ans, i, j = [], 1, n
        while i <= j:
            if k > 1:
                if k % 2:
                    ans.append(i)
                    i += 1
                else:
                    ans.append(j)
                    j -= 1
                k -= 1
            else:
                ans.append(i)
                i += 1
        return ans


# TESTS
for n, k, expected in [
    (3, 1, [1, 2, 3]),
    (3, 2, [3, 1, 2]),
    (9, 8, [9, 1, 8, 2, 7, 3, 6, 4, 5]),
    (9, 5, [1, 9, 2, 8, 3, 4, 5, 6, 7]),
    (8, 7, [1, 8, 2, 7, 3, 6, 4, 5]),
]:
    sol = Solution()
    actual = sol.constructArray(n, k)
    print("Construct beautiful list from n =", n, ", k =", k, "->", actual)
    assert actual == expected
