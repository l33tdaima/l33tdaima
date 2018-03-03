# 316. Remove Duplicate Letters (Hard)

Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example:
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"

## Solution
Given the string s, the greedy choice is to make sure the leftmost letter in the answer the smallest, s[i], s.t. the suffix s[i..n] contains all the unique letters (maybe smaller than s[i], but you can't change that). Note that, when there are more than one smallest s[i]'s, we choose the leftmost one. Why? Simply consider the example: “abcacb”.

After determining the greedy choice s[i], we get a new string s’ from s by

removing all letters to the left of s[i],
removing all s[i]'s from s.
We then recursively solve the problem w.r.t. s’.

The runtime is O(26 * n) = O(n).

#GOOGL
#Stack #Greedy
