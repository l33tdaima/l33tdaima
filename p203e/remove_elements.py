from local_packages.list import ListNode

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        sentinel = ListNode(val + 1, head)
        p = sentinel
        while p and p.next:
            if p.next.val == val:
                p.next = p.next.next
            else:
                p = p.next
        return sentinel.next


# TESTS
tests = [
    ([], 1, []),
    ([1], 2, [1]),
    ([1, 1], 1, []),
    ([6, 1, 2, 3, 6, 4, 5, 6], 6, [1, 2, 3, 4, 5]),
]
for t in tests:
    sol = Solution()
    actual = sol.removeElements(ListNode.from_array(t[0]), t[1])
    print("Remove elements from", t[0], "->", ListNode.to_array(actual))
