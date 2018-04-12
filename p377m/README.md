# 377. Combination Sum IV (Medium)

Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

### Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.

Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?

## Solution
### Intuitive Approach
Topdown backtracking similar to [#039m](../p039m/README.md), but always start from index 0. O(N^N) complexity in order to iterate all the possible combinations.

### Optimal Approach
Since we only need to solve for the count instead of the exact combinations, we can do bottom-up which solves and stores the intermediate results `1, 2, ..., target-1, target`.

Denote the number of ways if target is t by dp[t], which is derived by
- Scanning the candidates list and asking if I pick this candidate i, how many ways to come up with `target - candidate[i]`
- Sum up the intermediate results from above

#GOOGL #FB #SNAP

#Dynamic Programming

#Similar question [#039m](../p039m/README.md) [#040m](../p040m/README.md) [#216m](../p216m/README.md)
