# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import List
from local_packages.list import ListNode


class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        dummy = jump = ListNode(0)
        dummy.next = l = r = head
        while True:
            count = 0
            while r and count < k:  # use r to locate the range
                r, count = r.next, count + 1
            if count == k:
                cur, pre = l, r
                for _ in range(k):
                    cur.next, cur, pre = pre, cur.next, cur
                jump.next, jump, l = pre, l, r  # connect two k-groups
            else:
                return dummy.next


# TESTS
for array, k, expected in [
    ([1, 2, 3, 4, 5], 2, [2, 1, 4, 3, 5]),
    ([1, 2, 3, 4, 5], 3, [3, 2, 1, 4, 5]),
    ([1, 2, 3, 4, 5], 1, [1, 2, 3, 4, 5]),
    ([1], 1, [1]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.reverseKGroup(ListNode.from_array(array), k))
    print("Reverse nodes in k-group", array, "->", actual)
    assert actual == expected

