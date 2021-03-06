# Definition for singly-linked list.
class ListNode:
    def __init__(self, x=0, next=None):
        self.val = x
        self.next = next

    @staticmethod
    def from_array(xs):
        if len(xs) == 0:
            return None
        node = ListNode(xs[0])
        node.next = ListNode.from_array(xs[1:])
        return node

    @staticmethod
    def to_array(head):
        xs, p = [], head
        while p:
            xs.append(p.val)
            p = p.next
        return xs
