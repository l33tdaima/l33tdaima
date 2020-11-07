# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import List
from itertools import zip_longest
from local_packages.list import ListNode


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        s1, s2 = [], []
        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next
        dummy, carry = ListNode(), 0
        for e1, e2 in zip_longest(s1[::-1], s2[::-1]):
            s = carry
            if e1:
                s += e1
            if e2:
                s += e2
            carry = s // 10
            dummy.next = ListNode(s % 10, dummy.next)
        if carry == 1:
            dummy.next = ListNode(1, dummy.next)
        return dummy.next


# TESTS
for a1, a2, expected in [
    ([], [], []),
    ([1], [], [1]),
    ([3], [5], [8]),
    ([6], [9], [1, 5]),
    ([6, 5], [9, 0, 2], [9, 6, 7]),
    ([6, 5], [9, 4, 9], [1, 0, 1, 4]),
    ([7, 2, 4, 3], [5, 6, 4], [7, 8, 0, 7]),
    ([9, 9, 9], [1], [1, 0, 0, 0]),
]:
    sol = Solution()
    actual = ListNode.to_array(
        sol.addTwoNumbers(ListNode.from_array(a1), ListNode.from_array(a2))
    )
    print("Add", a1, "+", a2, "->", actual)
    assert actual == expected
