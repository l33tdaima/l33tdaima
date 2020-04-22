# """
# This is BinaryMatrix's API interface.
# You should not implement it, or speculate about its implementation
# """
# class BinaryMatrix(object):
#    def get(self, x: int, y: int) -> int:
#    def dimensions(self) -> list[]:


class Solution:
    def leftMostColumnWithOneV1(self, binaryMatrix: "BinaryMatrix") -> int:
        nrows, ncols = binaryMatrix.dimensions()
        # Binary search for the leftmost 1
        def binarySearchLeftmost1(row: int, lo: int, hi: int) -> int:
            while lo < hi:
                mid = lo + (hi - lo) // 2
                if binaryMatrix.get(row, mid) == 0:
                    lo = mid + 1
                else:
                    hi = mid
            return lo

        leftmost = ncols
        for r in range(nrows):
            if leftmost < ncols and binaryMatrix.get(r, leftmost) == 0:
                continue
            leftmost = binarySearchLeftmost1(r, 0, leftmost)

        return leftmost if leftmost < ncols else -1

    def leftMostColumnWithOneV2(self, binaryMatrix: "BinaryMatrix") -> int:
        nrows, ncols = binaryMatrix.dimensions()
        ans, r, c = -1, 0, ncols - 1
        while r < nrows and c >= 0:
            if binaryMatrix.get(r, c) == 1:
                ans = c
                c -= 1
            else:
                r += 1
        return ans
