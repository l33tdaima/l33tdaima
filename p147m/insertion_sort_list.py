# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        prev = sentinal = ListNode()
        while head:
            nxt = head.next
            # Optimization: search from begining
            # only when head is supposed in front of last insert point
            if head.val <= prev.val:
                prev = sentinal
            while prev.next and prev.next.val < head.val:
                prev = prev.next
            head.next = prev.next
            prev.next = head
            head = nxt
        return sentinal.next


# TESTS
for array, expected in [
    ([], []),
    ([3], [3]),
    ([4, 2, 1, 3], [1, 2, 3, 4]),
    ([-1, 5, 3, 4, 0], [-1, 0, 3, 4, 5]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.insertionSortList(ListNode.from_array(array)))
    print("Sort", array, "->", actual)
    assert actual == expected
