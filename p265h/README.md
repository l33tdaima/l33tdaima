# 265. Paint House II (Hard)

There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.

### Note:
All costs are positive integers.

### Example
```
Input: [[1,5,3],[2,9,4]]
Output: 5
Explanation: Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5; 
             Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5.
```
### Follow up:
Could you solve it in O(nk) runtime?

## Solution
This is general case of [#256e](../p256e/README.md) where k = 3. We need to scan the k colors for each new house i in [0, n-1], and keep the state of previous row, which is consisted of the minimal cost of the row denoted minCost, the color in [0, k-1] which yields the minCost denoted by minCostColor, and the secondMinCost (<= minCost). 

The new minCost of house i when painting using color j should be
```
cost[i][j] + (j == minCostColor) ? secondMinCost : minCost
```

#FB

#Dynamic Programming

#Similar questions [#256e](../p256e/README.md) [#265h](../p265h/README.md)