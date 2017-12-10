# 229. Majority Element II (Medium)

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

## Solution
There will be no more than 2 elements in the outcome. A variant of Boyer-Moore Algorithm which we must check candidate 1 (m1) and candidate 2 (m2) first, not zero first as we did in p169e, otherwise we could have m1 and m2 the same in some test cases.

#Array
