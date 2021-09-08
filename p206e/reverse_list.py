# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import List, Optional
from local_packages.list import ListNode


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        h2 = head.next
        ret = self.reverseList(h2)
        h2.next, head.next = head, None
        return ret

    def reverseListIter(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        while head:
            nxt = head.next
            head.next = prev
            prev, head = head, nxt
        return prev


# TESTS
for array, expected in [
    ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),
    ([1, 2], [2, 1]),
    ([], []),
]:
    sol = Solution()
    actual1 = ListNode.to_array(sol.reverseListIter(ListNode.from_array(array)))
    actual2 = ListNode.to_array(sol.reverseList(ListNode.from_array(array)))
    print("Reverse linked list", array, "->", actual1)
    assert actual1 == expected == actual2
