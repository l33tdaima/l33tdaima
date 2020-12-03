# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from local_packages.list import ListNode
from random import random
from collections import Counter


class Solution:
    def __init__(self, head: ListNode):
        """
        @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
        """
        self.head = head

    def getRandom(self) -> int:
        """
        Returns a random node's value.
        """
        p, ans, i = self.head.next, self.head.val, 1
        while p:
            if random() < (1 / (1 + i)):
                ans = p.val
            p, i = p.next, i + 1

        return ans


# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
head = ListNode.from_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
sol = Solution(head)
counter = Counter()
N = 10000
for _ in range(N):
    counter[sol.getRandom()] += 1

for c in counter:
    counter[c] /= N
print(counter)
