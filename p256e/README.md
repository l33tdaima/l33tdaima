# 256. Paint House (Easy)

There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.

Note:
All costs are positive integers.

#LNKD

### Example:
```
Input: [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue. 
             Minimum cost: 2 + 5 + 3 = 10.
```

## Solution
Compute the minCost of each house if painted with red `r`, blue `b`, green `g`,
```
    r = costs[i][0] + Math.min(prev_b, prev_g);
    b = costs[i][1] + Math.min(prev_r, prev_g);
    g = costs[i][2] + Math.min(prev_r, prev_b);
```
The final answer lies in the min of r, b, g.

#Dynamic Programming

#Similar questions [#256e](../p256e/README.md) [#265h](../p265h/README.md)