# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        dummy = ListNode(next=head)
        p, prev = head, dummy
        while p and p.next:
            prev.next = p.next
            q = p.next.next
            p.next.next, p.next = p, q
            prev, p = p, q
        return dummy.next

    def swapPairsRec(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        n = head.next
        head.next = self.swapPairsRec(n.next)
        n.next = head
        return n


# TESTS
for t, expected in [
    ([], []),
    ([1], [1]),
    ([1, 2], [2, 1]),
    ([1, 2, 3], [2, 1, 3]),
    ([1, 2, 3, 4], [2, 1, 4, 3]),
    ([1, 2, 3, 4, 5, 6, 7], [2, 1, 4, 3, 6, 5, 7]),
    ([1, 2, 3, 4, 5, 6, 7, 8], [2, 1, 4, 3, 6, 5, 8, 7]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.swapPairs(ListNode.from_array(t)))
    print("Swap pairs", t, "->", actual)
    assert actual == expected
    assert expected == ListNode.to_array(sol.swapPairsRec(ListNode.from_array(t)))
