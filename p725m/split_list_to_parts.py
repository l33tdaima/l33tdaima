# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional, List
from local_packages.list import ListNode


class Solution:
    def splitListToParts(
        self, head: Optional[ListNode], k: int
    ) -> List[Optional[ListNode]]:
        # Length of the input
        length, p = 0, head
        while p is not None:
            p, length = p.next, length + 1
        # Determine the length of each part
        size, rem = length // k, length % k
        ans = [size + 1] * rem + [size] * (k - rem)
        # Split the list
        prev, p = None, head
        for i, sz in enumerate(ans):
            ans[i] = p
            for _ in range(sz):
                prev, p = p, p.next
            if p and prev:
                prev.next = None
        return ans


# TESTS
for array, k, expected in [
    ([1, 2, 3], 5, [[1], [2], [3], [], []]),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]),
]:
    sol = Solution()
    actual = list(
        map(ListNode.to_array, sol.splitListToParts(ListNode.from_array(array), k))
    )
    print("Split", array, "into", k, "parts ->", actual)
    assert actual == expected
