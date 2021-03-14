# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode


class Solution:
    def swapNodes(self, head: ListNode, k: int) -> ListNode:
        p, n1, n2 = head, None, None
        while p:
            k -= 1
            if n2:
                n2 = n2.next
            if k == 0:
                n1, n2 = p, head
            p = p.next
        n1.val, n2.val = n2.val, n1.val
        return head


# TESTS
for arr, k, expected in [
    ([1, 2, 3, 4, 5], 2, [1, 4, 3, 2, 5]),
    ([7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5, [7, 9, 6, 6, 8, 7, 3, 0, 9, 5]),
    ([1], 1, [1]),
    ([1, 2], 1, [2, 1]),
    ([1, 2, 3], 2, [1, 2, 3]),
]:
    sol = Solution()
    actual = ListNode.to_array(sol.swapNodes(ListNode.from_array(arr), k))
    print(f"Swap {k}th node from begin and end in {arr} -> {actual}")
    assert actual == expected
