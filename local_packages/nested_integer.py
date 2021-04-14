"""
This is the interface that allows for creating nested lists.
"""


class NestedInteger:
    def __init__(self, val: object):
        if type(val) is int:
            self.val = val
        else:
            self.val = list(map(NestedInteger, val))

    def isInteger(self) -> bool:
        """
        @return True if this NestedInteger holds a single integer, rather than a nested list.
        """
        return type(self.val) is int

    def getInteger(self) -> int:
        """
        @return the single integer that this NestedInteger holds, if it holds a single integer
        Return None if this NestedInteger holds a nested list
        """
        return self.val if type(self.val) is int else None

    def getList(self) -> ["NestedInteger"]:
        """
        @return the nested list that this NestedInteger holds, if it holds a nested list
        Return None if this NestedInteger holds a single integer
        """
        return list(self.val) if type(self.val) is list else None


if __name__ == "__main__":
    t = NestedInteger([[1, 1], 2, [1, 1]])
    assert t.isInteger() == False
    assert t.getInteger() == None
    assert len(t.getList()) == 3

