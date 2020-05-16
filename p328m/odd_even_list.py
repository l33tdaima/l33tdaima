# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    # By move the odd node in front of even head
    def oddEvenListV1(self, head: ListNode) -> ListNode:
        if not head:
            return None
        p, pev = head, head.next
        while pev and pev.next:
            # insert the odd node after p
            odd = pev.next
            pev.next = odd.next
            odd.next = p.next
            p.next = odd
            # next
            p = p.next
            pev = pev.next
        return head

    # produce two sub lists and concatnate them
    def oddEvenListV2(self, head: ListNode) -> ListNode:
        if not head:
            return None
        pod, pev, evhead = head, head.next, head.next
        while pod.next and pev.next:
            pod.next = pev.next
            pev.next = pod.next.next
            pod = pod.next
            pev = pev.next
        pod.next = evhead
        return head


# TESTS
tests = [
    ([], []),
    ([1], [1]),
    ([1, 2], [1, 2]),
    ([1, 2, 3, 4, 5], [1, 3, 5, 2, 4]),
    ([1, 2, 3, 4, 5, 6], [1, 3, 5, 2, 4, 6]),
    ([2, 1, 3, 5, 6, 4, 7], [2, 3, 6, 7, 1, 5, 4]),
]
for t in tests:
    sol = Solution()
    actual1 = ListNode.to_array(sol.oddEvenListV1(ListNode.from_array(t[0])))
    actual2 = ListNode.to_array(sol.oddEvenListV2(ListNode.from_array(t[0])))
    print("Odd even linked list of", t[0], "->", t[1])
    assert actual1 == t[1] and actual2 == t[1]
