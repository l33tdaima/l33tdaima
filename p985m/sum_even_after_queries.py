class Solution:
    def sumEvenAfterQueriesV1(
        self, nums: list[int], queries: list[list[int]]
    ) -> list[int]:
        ans, even_sum = [], sum(n for n in nums if not n & 1)
        for val, i in queries:
            newval = nums[i] + val
            if nums[i] & 1:
                if not newval & 1:
                    even_sum += newval
            else:
                if newval & 1:
                    even_sum -= nums[i]
                else:
                    even_sum += val
            ans.append(even_sum)
            nums[i] = newval
        return ans

    def sumEvenAfterQueriesV2(
        self, nums: list[int], queries: list[list[int]]
    ) -> list[int]:
        ans, even_sum = [], sum(n for n in nums if not n & 1)
        for val, i in queries:
            if not nums[i] & 1:
                even_sum -= nums[i]
            nums[i] += val
            if not nums[i] & 1:
                even_sum += nums[i]
            ans.append(even_sum)
        return ans


# TESTS
for nums, queries, expected in [
    ([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]], [8, 6, 2, 4]),
    ([1], [[4, 0]], [0]),
]:
    sol = Solution()
    actual = sol.sumEvenAfterQueriesV2(nums, queries)
    print("Queries answers ->", actual)
    assert actual == expected
