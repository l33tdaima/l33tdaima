# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.binary_tree import TreeNode
from typing import List


class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if not nums:
            return None
        mid = len(nums) // 2
        return TreeNode(
            nums[mid],
            self.sortedArrayToBST(nums[:mid]),
            self.sortedArrayToBST(nums[mid + 1 :]),
        )


# TESTS
for nums, expected in [
    ([-10, -3, 0, 5, 9], "0,-3,-10,#,#,#,9,5,#,#,#"),
    ([1, 3], "3,1,#,#,#"),
    ([], "#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.sortedArrayToBST(nums))
    print("Convert", nums, "to BST ->", actual)
    assert actual == expected
