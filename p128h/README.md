# 128. Longest Consecutive Sequence (Hard)

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

## Solution
Create a set of nums, then walk through the numbers again, but only start counting when the number is the lowest. Checking a number existing is O(1) assuming Set lookup, depending on its implementation, it might not be that case.

#Array #Union Find
#GOOGL #FB
