class Solution:
    def smallestRepunitDivByK(self, K: int) -> int:
        if K % 10 not in {1, 3, 7, 9}:
            return -1
        mod, mod_set = 0, set()
        for i in range(1, K + 1):
            mod = (mod * 10 + 1) % K
            if mod == 0:
                return i
            if mod in mod_set:
                return -1
            mod_set.add(mod)
        return -1


# TESTS
for K, expected in [(1, 1), (2, -1), (3, 3), (16, -1)]:
    sol = Solution()
    actual = sol.smallestRepunitDivByK(K)
    print("The length of the smallest N divisible by", K, "->", actual)
    assert actual == expected
