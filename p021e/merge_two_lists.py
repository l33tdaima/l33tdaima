# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from local_py_packages.list import ListNode


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
        p.next = l1 if l1 is not None else l2
        return sentinel.next


# TESTS
tests = [
    [[], []],
    [[1], [2]],
    [[], [1]],
    [[1, 1, 1], [1, 1, 2]],
    [[1, 2, 4], [1, 3, 4]],
    [[1, 3, 9], [2, 4, 6, 8, 10]],
]
for t in tests:
    sol = Solution()
    l1 = ListNode.from_array(t[0])
    l2 = ListNode.from_array(t[1])
    act = sol.mergeTwoLists(l1, l2)
    print("Merge", t[0], "and", t[1], "->", ListNode.to_array(act))
