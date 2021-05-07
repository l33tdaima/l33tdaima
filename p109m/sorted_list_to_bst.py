# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from local_packages.list import ListNode
from local_packages.binary_tree import TreeNode


class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        if not head:
            return None
        if not head.next:
            return TreeNode(head.val)

        pslow, slow, fast = None, head, head
        while fast and fast.next:
            pslow, slow = slow, slow.next
            fast = fast.next.next
        pslow.next = None

        return TreeNode(
            slow.val,
            left=self.sortedListToBST(head),
            right=self.sortedListToBST(slow.next),
        )


# TESTS
for array, expected in [
    ([-10, -3, 0, 5, 9], "0,-3,-10,#,#,#,9,5,#,#,#"),
    ([], "#"),
    ([0], "0,#,#"),
    ([1, 3], "3,1,#,#,#"),
    ([1, 2, 3, 4], "3,2,1,#,#,#,4,#,#"),
]:
    sol = Solution()
    actual = TreeNode.serialize(sol.sortedListToBST(ListNode.from_array(array)))
    print("Convert sorted list", array, "to BST ->", actual)
    assert actual == expected
