# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        sentinal = ListNode()
        p, carry = sentinal, 0
        while carry or l1 or l2:
            s = carry
            if l1:
                s, l1 = s + l1.val, l1.next
            if l2:
                s, l2 = s + l2.val, l2.next
            p.next = ListNode(s % 10)
            carry = s // 10
            p = p.next
        return sentinal.next


# TESTS
for a1, a2, expected in [
    ([2, 4, 3], [5, 6, 4], [7, 0, 8]),
    ([0], [0], [0]),
    ([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]),
    ([1], [], [1]),
    ([3], [5], [8]),
    ([6], [9], [5, 1]),
    ([6, 5], [9, 0, 2], [5, 6, 2]),
    ([6, 5], [8, 4, 9], [4, 0, 0, 1]),
]:
    sol = Solution()
    actual = ListNode.to_array(
        sol.addTwoNumbers(ListNode.from_array(a1), ListNode.from_array(a2))
    )
    print(f"{a1} + {a2} -> {actual}")
    assert actual == expected
