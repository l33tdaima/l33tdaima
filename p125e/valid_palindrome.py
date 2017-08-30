import sys

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        h = 0
        t = len(s)-1
        while h < t:
            if not s[h].isalnum():
                h += 1
                continue
            if not s[t].isalnum():
                t -= 1
                continue
            if s[h].lower() == s[t].lower():
                h += 1
                t -= 1
                continue
            else:
                return False
        return True

def main(argv):
    sol = Solution()
    s = "A man, a plan, a canal: Panama"
    print "\"%s\" palindrome test result: %r " % (s, sol.isPalindrome(s))
    s = "race a car"
    print "\"%s\" palindrome test result: %r " % (s, sol.isPalindrome(s))
    s = ""
    print "\"%s\" palindrome test result: %r " % (s, sol.isPalindrome(s))
    s = "D"
    print "\"%s\" palindrome test result: %r " % (s, sol.isPalindrome(s))
    s = "    !    "
    print "\"%s\" palindrome test result: %r " % (s, sol.isPalindrome(s))

if __name__ == "__main__":
    main(sys.argv)