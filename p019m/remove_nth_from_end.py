# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(0, head)
        pf, pb = dummy, dummy
        while n >= 0:
            pf, n = pf.next, n - 1
        while pf:
            pf, pb = pf.next, pb.next
        pb.next = pb.next.next
        return dummy.next


# TESTS
for array, n, expected in [
    ([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]),
    ([1], 1, []),
    ([1, 2], 1, [1]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.removeNthFromEnd(ListNode.from_array(array), n))
    print(f"Remove {n}th node from end of {array} -> {actual}")
    assert actual == expected
