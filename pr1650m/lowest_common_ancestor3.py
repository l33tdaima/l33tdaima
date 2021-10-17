class Node:
    """
    # Definition for a Node.
    """

    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None


class Solution:
    def lowestCommonAncestor(self, p: "Node", q: "Node") -> "Node":
        ip, iq = p, q
        while ip != iq:
            ip = ip.parent if ip.parent else q
            iq = iq.parent if iq.parent else p
        return ip
