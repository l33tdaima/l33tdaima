from typing import List


class Solution:
    def largestDivisibleSubsetV1(self, nums: List[int]) -> List[int]:
        nums.sort()
        lds, prev = [1] * len(nums), [-1] * len(nums)
        glds, gprev = 0, -1
        for n in range(len(nums)):
            for i in range(0, n):
                if nums[n] % nums[i] == 0 and (lds[i] + 1 > lds[n]):
                    lds[n] = lds[i] + 1
                    prev[n] = i
            if lds[n] > glds:
                glds, gprev = lds[n], n
        ans = []
        while gprev != -1:
            ans.append(nums[gprev])
            gprev = prev[gprev]
        return ans[::-1]

    def largestDivisibleSubsetV2(self, nums: List[int]) -> List[int]:
        lds = {-1: set()}
        for x in sorted(nums):
            lds[x] = max((lds[n] for n in lds if x % n == 0), key=len) | {x}
            # | is union operator on set
        return list(max(lds.values(), key=len))


# TESTS
tests = [
    [1],
    [1, 2, 3],
    [1, 2, 4, 8],
    [1, 2, 4, 3, 9, 18],
]
for t in tests:
    sol = Solution()
    actual = sol.largestDivisibleSubsetV2(t)
    print("Largest divisible subset in", t, "->", actual)
