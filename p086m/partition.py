# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        p1 = h1 = ListNode(-101)
        p2 = h2 = ListNode(101)
        while head:
            if head.val < x:
                p1.next = head
                p1 = p1.next
            else:
                p2.next = head
                p2 = p2.next
            head = head.next
        p1.next, p2.next = h2.next, None
        return h1.next


# TESTS
for array, x, expected in [
    ([], 3, []),
    ([1, 4, 3, 2, 5, 2], 3, [1, 2, 2, 4, 3, 5]),
    ([2, 1], 2, [1, 2]),
    ([1, 4, 3, 0, 2, 5, 2], 3, [1, 0, 2, 2, 4, 3, 5]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.partition(ListNode.from_array(array), x))
    print("Partition", array, "->", actual)
    assert actual == expected
