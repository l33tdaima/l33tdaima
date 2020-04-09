# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from local_packages.list import ListNode


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow


# TESTS
tests = [
    [[1], 1],
    [[1, 2], 2],
    [[1, 2, 3], 2],
    [[1, 2, 3, 4, 5], 3],
    [[1, 2, 3, 4, 5, 6], 4],
]
for t in tests:
    sol = Solution()
    actual = sol.middleNode(ListNode.from_array(t[0]))
    print("Middle node of", t, "->", actual.val)
    assert actual.val == t[1]
