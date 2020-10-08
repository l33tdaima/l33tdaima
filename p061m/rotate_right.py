# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if head is None or k == 0:
            return head
        # find the length
        p, length = head, 1
        while p.next:
            length += 1
            p = p.next
        k = length - k % length
        if k == length:  # corner case
            return head
        p.next = head  # circle the list
        # move length - k steps for break point
        while k > 0:
            k -= 1
            p = p.next
        ans_head = p.next
        p.next = None
        return ans_head


# TESTS
tests = [
    ([], 4, []),
    ([1, 2, 3], 0, [1, 2, 3]),
    ([1, 2], 2, [1, 2]),
    ([1], 99, [1]),
    ([1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]),
    ([0, 1, 2], 4, [2, 0, 1]),
]
for array, k, expected in tests:
    sol = Solution()
    actual = ListNode.to_array(sol.rotateRight(ListNode.from_array(array), k))
    print("Rotate", array, "right by", k, "places ->", actual)
    assert actual == expected
