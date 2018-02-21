# 746. Min Cost Climbing Stairs (Easy)

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].

## Solution
We need a DP array align with the cost array, dp[i] represents the accumlated min cost if step i is stepped on and its cost is paid.

dp[i] = cost[i] + min(dp[i-1], dp[i-2])

The min cost of topping staircase up to step i, is the min of dp[i] and dp[i-1], meaning the last step is either stepping on i and then one more step, or stepping on i-1, and then two steps, whichever costs less.

e.g.
cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
dp:   [1, 100, 2, 3, 3, 103, 4, 5, 104, 6]

#AMZN
