# 312. Burst Balloons (Hard)

Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note: 
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

### Example:
```
Given [3, 1, 5, 8]
Return 167

    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
```

## Solution
### Intuitive Approach
The brutal force approach is backtracking, pick one from N balloons, generate the reduced list, recursively call with reduced list of size N-1 carrying the path sum. In this way we iterate each permutation, calculate the total reward, then pick the maxinum. O(N!)

Also noticed for the given example,
```
Pick 1: 3 * 1 * 5 + 3 * 5 * 8 + 3*8 + 8 = 167
Pick 2: 1 * 5 * 8 + 3 * 1 * 8 + 3*8 + 8 = 96
```
shows local maximum doesn't lead to global maximum, greedy algorithm also doesn't work here.

### Optimal Approach
After bursting a balloon i, we find it is very difficult to divide the problem into subproblem as i-1 and i+1 become a continuous array again. What about the other direction? *Balloon left has nothing to do with the balloon already bursted.* At the last step when one balloon left, we know the maxCoin simply `max{1*coin[i]*1}, i = [1..n-2], coin[0] = coin[n-1] = 1`.

Denote the max coin rewarded from l to r by `maxCoins[l][r], 0 <= l < r <= n - 1`, the final answer is `maxCoin[0][n-1]`, where coin[0]= coin[n-1] = 1 as added boundary. The recursion is
`maxCoin[l][r] = max{coin[l]*coin[k]*coin[r] + maxCoin[l][k] + maxCoin[k][r]}, k = [l+1 .. r-1]`

### Optimal Approach - Dynamic Programming (Bottom-up)
Using the same formula for transition, we do bottom-up to inrease the range between left and right balloons, from 2 to n. For each range, iterate `left` position from 0 to n - range, then iterate the balloon to burst, the candidate position ranges from `left + 1` to `left + range`. Fill the dp matrix in time complexity O(N^3).

#GOOGL #SNAP
#GOOGL.MJ

#Divide and Conquer #Dynamic Programming
