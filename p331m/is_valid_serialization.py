class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        # diff = outdegree - indegree
        diff = 1
        for n in preorder.split(","):
            diff -= 1
            if diff < 0:
                return False
            if n != "#":
                diff += 2
        return diff == 0


# TESTS
for preorder, expected in [
    ("9,3,4,#,#,1,#,#,2,#,6,#,#", True),
    ("1,#", False),
    ("9,#,#,1", False),
]:
    sol = Solution()
    actual = sol.isValidSerialization(preorder)
    print("Is", preorder, "a preorder serialization of binary tree ->", actual)
    assert actual == expected
