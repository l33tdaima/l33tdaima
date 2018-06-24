# 205. Isomorphic Strings (Easy)

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.

## Solution
The restriction here is s and t are 1-1 mapping, can't be M-1 or 1-M mapping. Instead of storing the char, we can just store the index last seen for both s->t map and t->s map which should be identical, including initial value -1.

#LNKD #GOOGL
#GOOGL.MJ

#Hash Table
