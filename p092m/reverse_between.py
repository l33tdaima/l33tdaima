# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def reverseBetween(
        self, head: ListNode, left: int, right: int
    ) -> ListNode:
        if not head:
            return head
        dummy = ListNode(0, head)
        pre, i = dummy, 1
        while i < left:
            i, pre = i + 1, pre.next

        start = pre.next
        then = start.next

        while i < right:
            start.next = then.next
            then.next = pre.next
            pre.next = then
            then = start.next
            i += 1

        return dummy.next


# TESTS
for array, left, right, expected in [
    ([1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]),
    ([5], 1, 1, [5]),
]:
    sol = Solution()
    actual = ListNode.to_array(
        sol.reverseBetween(ListNode.from_array(array), left, right)
    )
    print("Reverse", array, "between", left, "and", right, "->", actual)
    assert actual == expected
