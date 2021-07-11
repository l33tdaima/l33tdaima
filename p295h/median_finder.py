from heapq import heappush, heappushpop


class MedianFinder:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.lmaxheap, self.rminheap = [], []

    def addNum(self, num: int) -> None:
        if len(self.lmaxheap) == len(self.rminheap):
            heappush(self.rminheap, -heappushpop(self.lmaxheap, -num))
        else:
            heappush(self.lmaxheap, -heappushpop(self.rminheap, num))

    def findMedian(self) -> float:
        if len(self.lmaxheap) == len(self.rminheap):
            return (self.rminheap[0] - self.lmaxheap[0]) / 2.0
        else:
            return float(self.rminheap[0])


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
for tests, expected in [
    ([1, 2, None, 3, None], [None, None, 1.5, None, 2]),
    ([1, 2, None, 3, None, 4, None], [None, None, 1.5, None, 2, None, 2.5]),
]:
    mf = MedianFinder()
    actual = [mf.addNum(t) if t else mf.findMedian() for t in tests]
    print("MedianFinder", tests, "->", actual)
    assert actual == expected

