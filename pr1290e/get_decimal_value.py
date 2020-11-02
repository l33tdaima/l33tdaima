# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        ans, p = 0, head
        while p:
            ans = (ans << 1) + p.val
            p = p.next
        return ans


# TESTS
for array, expected in [
    ([1, 0, 1], 5),
    ([0], 0),
    ([1], 1),
    ([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], 18880),
    ([0, 0], 0),
]:
    sol = Solution()
    actual = sol.getDecimalValue(ListNode.from_array(array))
    print("The decimal value of", array, "->", actual)
    assert actual == expected
