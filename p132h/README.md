# 132. Palindrome Partitioning II (Hard)
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.

##Solution (from tqlong, idea is too great to miss)
This DP algorithm utilizes the symmetry property of palindrome.

Say that it started at s[i] = 'b', and s[i-1,i+1] is a palindrome "aba":
.......aba...
|<-X->| ^
|<---Y-->|
And we know the least cuts for s[0,i-1) is X, then the least cuts for s[0,i+1] Y is not greater than X+1.

.......bb... (even length palindrome case)
|<-X->|^
|<--Y-->|
Last, we need to find out all the palindromes in s[0,i+1] so as to minimize the number of cuts.

#Dynamic Programming
