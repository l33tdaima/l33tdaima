from typing import List
from random import randint


class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        return self.nums

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        ans = self.nums[:]
        for i in range(len(self.nums) - 1, -1, -1):
            j = randint(0, i)
            ans[i], ans[j] = ans[j], ans[i]
        return ans


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
sol = Solution([1, 2, 3])
print(sol.shuffle())
print(sol.reset())
print(sol.shuffle())
