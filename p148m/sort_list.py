# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        pre, slow, fast = None, head, head
        while fast and fast.next:
            pre, slow, fast = slow, slow.next, fast.next.next
        pre.next = None
        return self.merge(self.sortList(head), self.sortList(slow))

    def merge(self, l1: ListNode, l2: ListNode) -> ListNode:
        sentinal = p = ListNode()
        while l1 and l2:
            if l1.val <= l2.val:
                p.next, p, l1 = l1, l1, l1.next
            else:
                p.next, p, l2 = l2, l2, l2.next
        p.next = l1 or l2
        return sentinal.next


# TESTS
tests = [
    ([4, 2, 1, 3], [1, 2, 3, 4]),
    ([-1, 5, 3, 4, 0], [-1, 0, 3, 4, 5]),
    ([], []),
    ([7], [7]),
]
for nums, expected in tests:
    sol = Solution()
    actual = ListNode.to_array(sol.sortList(ListNode.from_array(nums)))
    assert actual == expected
