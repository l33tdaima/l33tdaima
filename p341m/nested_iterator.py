# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """
from local_packages.nested_integer import NestedInteger


class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        def generator(nested: NestedInteger):
            if nested.isInteger():
                yield nested.getInteger()
            else:
                for i in nested.getList():
                    yield from generator(i)

        def listGenerator(nestedList: [NestedInteger]):
            for nested in nestedList:
                yield from generator(nested)

        self.generator = listGenerator(nestedList)
        self.val = None

    def next(self) -> int:
        return self.val

    def hasNext(self) -> bool:
        try:
            self.val = next(self.generator)
            return True
        except StopIteration:
            return False


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
for nestedList, expected in [
    ([[1, 1], 2, [1, 1]], [1, 1, 2, 1, 1]),
    ([1, [4, [6]]], [1, 4, 6]),
]:
    nintlist = NestedInteger(nestedList)
    i, actual = NestedIterator(nintlist.getList()), []
    while i.hasNext():
        actual.append(i.next())
    print("Flattened iterator output of", nestedList, "->", actual)
    assert actual == expected
