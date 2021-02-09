# Below is the interface for Iterator, which is already defined for you.
#
class Iterator:
    def __init__(self, nums):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.iterator = iter(nums)
        try:
            self.peeked = next(self.iterator)
        except StopIteration:
            self.peeked = None

    def next(self):
        """
        :rtype: int
        """
        if not self.peeked:
            raise StopIteration
        ret = self.peeked
        try:
            self.peeked = next(self.iterator)
        except StopIteration:
            self.peeked = None
        return ret

    def hasNext(self):
        """
        :rtype: bool
        """
        return self.peeked is not None


class PeekingIterator:
    def __init__(self, iterator):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.iterator = iterator
        self.peeked = self.iterator.next() if self.iterator.hasNext() else None

    def peek(self):
        """
        Returns the next element in the iteration without advancing the iterator.
        :rtype: int
        """
        return self.peeked

    def next(self):
        """
        :rtype: int
        """
        ret = self.peeked
        self.peeked = self.iterator.next() if self.iterator.hasNext() else None
        return ret

    def hasNext(self):
        """
        :rtype: bool
        """
        return self.peeked is not None


# Your PeekingIterator object will be instantiated and called as such:
it = PeekingIterator(Iterator([1, 2, 3, 4]))
while it.hasNext():
    print(it.peek())  # Get the next element but not advance the iterator.
    it.next()  # Should return the same value as [val].
