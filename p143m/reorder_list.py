# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

from local_packages.list import ListNode


class Solution:
    def reorderList(self, head: ListNode) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        if not head or not head.next:
            return
        # Split the list
        first, second = head, head
        while first and first.next:
            first, second = first.next.next, second.next
        mid, p = second.next, second.next
        second.next = None
        # Reverse the second half
        while p and p.next:
            nxt = p.next
            p.next = nxt.next
            nxt.next = mid
            mid = nxt
        # Interweave
        p1, p2 = head, mid
        while p1 and p2:
            p1nxt, p2nxt = p1.next, p2.next
            p1.next, p2.next = p2, p1nxt
            p1, p2 = p1nxt, p2nxt


# TEST
tests = [
    ([1, 2, 3, 4], [1, 4, 2, 3]),
    ([1, 2, 3, 4, 5], [1, 5, 2, 4, 3]),
    ([0, 1, 2, 3, 4, 5], [0, 5, 1, 4, 2, 3]),
]
for t in tests:
    sol = Solution()
    head = ListNode.from_array(t[0])
    sol.reorderList(head)
    print("Reorder list ->", ListNode.to_array(head))
    assert ListNode.to_array(head) == t[1]
