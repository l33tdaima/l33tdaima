# 680. Valid Palindrome II (Easy)

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

## Solution
Normally shrinking the range, but when seeing different characters we will call a helper to check two cases by removing left or right.

An intersting generic extension by at most removing K chars is also provided, by calling helper with k recursively.

#FB

#String
