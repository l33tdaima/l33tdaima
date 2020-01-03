# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    @staticmethod
    def from_array(xs):
        if len(xs) == 0:
            return None
        node = ListNode(xs[0])
        node.next = ListNode.from_array(xs[1:])
        return node

    @staticmethod
    def to_array(head):
        xs = []
        while head:
            xs.append(head.val)
            head = head.next
        return xs
