# 377. Combination Sum IV (Medium)

Given an array of distinct integers `nums` and a target integer `target`, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

### Example 1:

```
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
```

### Example 2:

```
Input: nums = [9], target = 3
Output: 0
```

### Constraints:

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 1000
- All the elements of nums are unique.
- 1 <= target <= 1000

_Follow up_: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

## Solution

### Intuitive Approach

Topdown backtracking similar to [#039m](../p039m/README.md), but always start from index 0. O(N^N) complexity in order to iterate all the possible combinations.

### Optimal Approach

Since we only need to solve for the count instead of the exact combinations, we can do bottom-up which solves and stores the intermediate results `1, 2, ..., target-1, target`.

Denote the number of ways if target is t by dp[t], which is derived by

- Scanning the candidates list and asking if I pick this candidate i, how many ways to come up with `target - candidate[i]`
- Sum up the intermediate results from above

Notice that top-down is faster than bottom-up because bottom-up does a lot of unnecessary computation of intermediate target which might never get used.

### Follow-up

If there are negative numbers in the array, imagine that you could have some positive numbers and negative numbers added up to the target, and you can do this process multiple times.

#GOOGL #FB #SNAP

#Dynamic Programming

#Similar question [#039m](../p039m/README.md) [#040m](../p040m/README.md) [#216m](../p216m/README.md) [#377m](../p377m/README.md)
