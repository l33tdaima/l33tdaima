# 334. Increasing Triplet Subsequence (Medium)

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k, 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.

## Solution
### Intuitive Approach
Solve the longest increasing subsequence problem like [#300m](../p300m/README.md) in O(N^2) to figure out the LIS length, check if it is greater than or equal to 3. 

### Optimal Approach
Since we only need to judge if we have increasing subsequence of 3, we can maintain two variables of min and 2nd min and look for the third one to return true, otherwise false.

t1 := so far the best candidate of end element of a one-cell subsequence to form a triplet subsequence

t2 := so far the best candidate of end element of a two-cell subsequence to form a triplet subsequence

So t1 and t2 are the perfect summary of history.

#FB

#Array #Dynamic Programming

#Similar question [#300m](../p300m/README.md) 
