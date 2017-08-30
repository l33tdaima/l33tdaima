import sys

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0 or (x != 0 and x % 10 == 0):
            return False
        left = x
        reverse = 0
        while reverse < left:
            reverse = reverse * 10 + left % 10
            left = left / 10
        return left == reverse or left == reverse / 10

def main(argv):
    sol = Solution()
    print "-3498 palindrome test result:", sol.isPalindrome(-3498)
    print "12345 palindrome test result:", sol.isPalindrome(12345)
    print "12321 palindrome test result:", sol.isPalindrome(12321)
    print "7887  palindrome test result:", sol.isPalindrome(7887)
    print "55555 palindrome test result:", sol.isPalindrome(55555)
    print "4444  palindrome test result:", sol.isPalindrome(4444)
    print "12210 palindrome test result:", sol.isPalindrome(12210)
    print "200   palindrome test result:", sol.isPalindrome(200)
    print "10    palindrome test result:", sol.isPalindrome(10)
    print "6     palindrome test result:", sol.isPalindrome(6)
    print "0     palindrome test result:", sol.isPalindrome(0)

if __name__ == "__main__":
    main(sys.argv)