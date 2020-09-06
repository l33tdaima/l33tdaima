# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List
from local_packages.binary_tree import TreeNode


class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        def toList(root: TreeNode):
            if not root:
                return []
            return toList(root.left) + [root.val] + toList(root.right)

        def inorder(root, lst):
            if not root:
                return
            inorder(root.left, lst)
            lst.append(root.val)
            inorder(root.right, lst)

        list1, list2 = [], []
        inorder(root1, list1)
        inorder(root2, list2)
        i, j, ans = 0, 0, []
        while i < len(list1) or j < len(list2):
            if j == len(list2) or (i < len(list1) and list1[i] < list2[j]):
                ans.append(list1[i])
                i += 1
            else:
                ans.append(list2[j])
                j += 1
        return ans


# TESTS
tests = [
    ("2,1,#,#,4,#,#", "1,0,#,#,3,#,#", [0, 1, 1, 2, 3, 4]),
    ("0,-10,#,#,10,#,#", "5,1,0,#,#,2,#,#,7,#,#", [-10, 0, 0, 1, 2, 5, 7, 10]),
    ("#", "5,1,0,#,#,2,#,#,7,#,#", [0, 1, 2, 5, 7]),
    ("0,-10,#,#,10,#,#", "#", [-10, 0, 10]),
    ("1,#,8,#,#", "8,1,#,#,#", [1, 1, 8, 8]),
]
for t1, t2, expected in tests:
    r1, r2 = TreeNode.deserialize(t1), TreeNode.deserialize(t2)
    sol = Solution()
    actual = sol.getAllElements(r1, r2)
    print("Get all elements from", t1, t2, "->", actual)
    assert actual == expected
