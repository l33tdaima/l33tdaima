# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        sentinal = ListNode(0, next=head)
        pre = sentinal
        while head and head.next:
            if head.val == head.next.val:
                while head and head.next and head.val == head.next.val:
                    head = head.next
                pre.next, head = head.next, head.next
            else:
                pre, head = pre.next, head.next
        return sentinal.next


# TESTS
for given, expected in [
    ([], []),
    ([1, 2, 3, 3, 4, 4, 5], [1, 2, 5]),
    ([1, 1, 1, 2, 3], [2, 3]),
    ([1, 4, 4, 4], [1]),
]:
    sol = Solution()
    actual = ListNode.to_array(
        sol.deleteDuplicates(ListNode.from_array(given))
    )
    print("Delete duplicates from", given, "->", actual)
    assert actual == expected
