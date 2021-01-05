# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from local_packages.list import ListNode


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        sentinel = ListNode(0)
        p = sentinel
        while l1 and l2:
            if l1.val < l2.val:
                p.next = l1
                l1 = l1.next
            else:
                p.next = l2
                l2 = l2.next
            p = p.next
        p.next = l1 if l1 else l2
        return sentinel.next


# TESTS
for l1, l2, expected in [
    ([], [], []),
    ([1], [2], [1, 2]),
    ([], [0], [0]),
    ([1, 1, 1], [1, 1, 2], [1, 1, 1, 1, 1, 2]),
    ([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]),
    ([1, 3, 9], [2, 4, 6, 8, 10], [1, 2, 3, 4, 6, 8, 9, 10]),
]:
    sol = Solution()
    actual = ListNode.to_array(
        sol.mergeTwoLists(ListNode.from_array(l1), ListNode.from_array(l2))
    )
    print("Merge", l1, "and", l2, "->", actual)
    assert actual == expected
