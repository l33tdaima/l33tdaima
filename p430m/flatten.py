"""
# Definition for a Node.
"""


class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child


class Solution:
    def flatten(self, head: "Node") -> "Node":
        if head is None:
            return head
        sentinal = Node(0)
        p, stack = sentinal, [head]
        while stack:
            top = stack.pop()
            if top.next:
                stack.append(top.next)
            if top.child:
                stack.append(top.child)
            p.next = top
            top.prev = p
            top.child = None
            p = top
        ans = sentinal.next
        ans.prev = None
        return ans
