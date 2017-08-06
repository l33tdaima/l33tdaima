# 9. Determine whether an integer is a palindrome. Do this without extra space.
A palindromic number or numeral palindrome is a number that remains the same when its digits are reversed. Like 16461, for example, it is "symmetrical".

## Questions the candidate should ask
You can expect following questions:

What is Palindrome => A number is palindrome if it is same forwards and back.
Should I handle negative numbers => No.
Should I handle fractional numbers => No.
Can I use itoa => No.
Should I care about zeros, single digit, big integers => Yes. we should handle any "unsigned integer".

## Sample inputs - Expected outputs
Input Return Value
12345 false
12321 true
11111 true
1221 true
6 true
0 true