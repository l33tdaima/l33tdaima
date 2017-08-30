import sys

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # sanity check
        if len(prices) < 2: 
            return 0

        maxProf = 0
        openPos = 0

        for i in xrange(1, len(prices)):
            # reset the open position
            if prices[i] < prices[openPos]:
                openPos = i
                continue

            if prices[i] - prices[openPos] > maxProf:
                maxProf = prices[i] - prices[openPos]

        return maxProf

def main(argv):
    sol = Solution()
    print "Max Profit is:", sol.maxProfit([7, 1, 5, 3, 6, 4])
    print "Max Profit is:", sol.maxProfit([7, 6, 4, 3, 1])
    print "Max Profit is:", sol.maxProfit([7, 1, 5, 3, 6, 0, 2, 1, 8, 7])

if __name__ == "__main__":
    main(sys.argv)
