class Solution:
    def subarraysDivByK(self, nums: list[int], k: int) -> int:
        psum, ans = 0, 0
        count = [1] + [0] * (k - 1)
        for n in nums:
            psum += n
            rem = psum % k
            ans += count[rem]
            count[rem] += 1
        return ans


# TESTS
for nums, k, expected in [
    ([4, 5, 0, -2, -3, 1], 5, 7),
    ([5], 9, 0),
]:
    sol = Solution()
    actual = sol.subarraysDivByK(nums, k)
    print("# of subarray sum divisible by", k, "->", actual)
    assert actual == expected
