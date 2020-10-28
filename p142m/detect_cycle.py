# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from local_packages.list import ListNode


class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        slow = fast = entry = head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
            if slow == fast:
                while slow != entry:
                    slow, entry = slow.next, entry.next
                return entry
        return None


# TESTS
for array, pos in [
    ([3, 2, 0, -4], 1),
    ([1, 2], 0),
    ([1], -1),
]:
    sol = Solution()
    # build the cycle
    head = ListNode.from_array(array)
    p, entry, i = head, None, 0
    while p and p.next:
        if i == pos:
            entry = p
        p, i = p.next, i + 1
    p.next = entry
    actual = sol.detectCycle(head)
    print("The node where cycle begins in", array, "->", actual and actual.val)
    assert actual == entry
