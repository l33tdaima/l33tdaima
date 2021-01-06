# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        sentinal = ListNode(0, next=head)
        p, was_dup = sentinal, False
        while p and p.next:
            if p.next.next:
                is_dup = p.next.val == p.next.next.val
                if is_dup or was_dup:
                    p.next = p.next.next  # delete p.next but not iterate
                else:
                    p = p.next
                was_dup = is_dup
            else:
                if was_dup:
                    p.next = None  # delete the last duplicate
                p = p.next
        return sentinal.next


# TESTS
for given, expected in [
    ([], []),
    ([1, 2, 3, 3, 4, 4, 5], [1, 2, 5]),
    ([1, 1, 1, 2, 3], [2, 3]),
    ([1, 4, 4, 4], [1]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.deleteDuplicates(ListNode.from_array(given)))
    print("Delete duplicates from", given, "->", actual)
    assert actual == expected
