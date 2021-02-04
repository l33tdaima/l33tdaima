# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from local_packages.list import ListNode


class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slow, fast = head, head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
            if slow == fast:
                return True
        return False


# TESTS
for array, pos, expected in [
    ([3, 2, 0, -4], 1, True),
    ([1, 2], 0, True),
    ([1], -1, False),
    ([1], 0, True),
]:
    sol = Solution()
    head = ListNode.from_array(array)
    if expected:
        cycle_pos = head
        while pos > 0:
            cycle_pos, pos = cycle_pos.next, pos - 1
        tail = head
        while tail and tail.next:
            tail = tail.next
        tail.next = cycle_pos
    actual = sol.hasCycle(head)
    print(array, pos, "has cycle ->", actual)
    assert actual == expected
