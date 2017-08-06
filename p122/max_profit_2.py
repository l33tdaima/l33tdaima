import sys

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        #return sum(max(prices[i + 1] - prices[i], 0) for i in range(len(prices) - 1))
        maxProf = 0

        for i in xrange(1, len(prices)):
            delta = prices[i] - prices[i-1]
            if delta > 0:
                # accumlate the profit
                maxProf += delta

        return maxProf

def main(argv):
    sol = Solution()
    print "Max Profit is:", sol.maxProfit([1])
    print "Max Profit is:", sol.maxProfit([7, 6, 4, 3, 1])
    print "Max Profit is:", sol.maxProfit([1, 2, 3, 4, 5])
    print "Max Profit is:", sol.maxProfit([7, 1, 5, 3, 6, 4])
    print "Max Profit is:", sol.maxProfit([7, 1, 5, 3, 6, 0, 2, 1, 8, 7])

if __name__ == "__main__":
    main(sys.argv)
