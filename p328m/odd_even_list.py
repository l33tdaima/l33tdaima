# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional
from local_packages.list import ListNode


class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # produce two sub lists and concatnate them
        if not head:
            return None
        pod, pev, evhead = head, head.next, head.next
        while pod.next and pev.next:
            pod.next = pev.next
            pev.next = pod.next.next
            pod, pev = pod.next, pev.next
        pod.next = evhead
        return head


# TESTS
for array, expected in [
    ([], []),
    ([1], [1]),
    ([1, 2], [1, 2]),
    ([1, 2, 3, 4, 5], [1, 3, 5, 2, 4]),
    ([1, 2, 3, 4, 5, 6], [1, 3, 5, 2, 4, 6]),
    ([2, 1, 3, 5, 6, 4, 7], [2, 3, 6, 7, 1, 5, 4]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.oddEvenList(ListNode.from_array(array)))
    print("Odd even linked list of", array, "->", actual)
    assert actual == expected
