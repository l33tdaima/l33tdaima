# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from typing import Optional
from local_packages.list import ListNode


class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow


# TESTS
for array, expected in [
    [[1], 1],
    [[1, 2], 2],
    [[1, 2, 3], 2],
    [[1, 2, 3, 4, 5], 3],
    [[1, 2, 3, 4, 5, 6], 4],
]:
    sol = Solution()
    actual = sol.middleNode(ListNode.from_array(array))
    print("Middle node of", array, "->", actual.val)
    assert actual.val == expected
