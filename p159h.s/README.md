# 159. Longest Substring with At Most Two Distinct Characters (Hard Subscription)

Given a string S, find the length of the longest substring T that contains at most two distinct characters.
For example,
Given S = "eceba",
T is "ece" which its length is 3.

Solution:
There are a few min/max substring meeting certain conditions problem can be solved using the common pattern below
p003m, p076h
1. Use two pointers: start and end to represent a window.
2. Move end to find a valid window.
3. When a valid window is found, move start to find a smaller window.

#Two Pointers #Hash Table #String #GOOGL
