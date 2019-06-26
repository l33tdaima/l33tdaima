from typing import List

class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        if t < 0:
            return False
        buckets = {}
        for i in range(len(nums)):
            id = nums[i] // (t + 1)
            if id in buckets:
                return True
            if id - 1 in buckets and nums[i] - buckets[id - 1] <= t:
                return True
            if id + 1 in buckets and buckets[id + 1] - nums[i] <= t:
                return True
            buckets[id] = nums[i]
            if i >= k:
                del buckets[nums[i - k] // (t + 1)]
        return False
# TESTS
tests = [
    {
        'nums': [1,2,3,1],
        'k': 3,
        't': 0,
        'expected': True
    },
    {
        'nums': [1,0,1,1],
        'k': 1,
        't': 2,
        'expected': True
    },
    {
        'nums': [1,5,9,1,5,9],
        'k': 2,
        't': 3,
        'expected': False 
    }
]
for t in tests:
    sol = Solution()
    actual = sol.containsNearbyAlmostDuplicate(t['nums'], t['k'], t['t'])
    print(t['nums'], 'k =', t['k'], 't =', t['t'], '->', actual)
    assert(actual == t['expected'])
