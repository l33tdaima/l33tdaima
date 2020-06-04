# 1029. Two City Scheduling (Easy)

There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

### Example 1:
```
Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
```
 
### Note:
1. 1 <= costs.length <= 100
2. It is guaranteed that costs.length is even.
3. 1 <= costs[i][0], costs[i][1] <= 1000

## Solution
The problem looks like a 0-1 Knapsack problem with restriction of count(A) = count(B) on search path, solvable by DP.

### Greedy idea
Sort the array by the cost difference between flying A and flying B, cost[i][0] - cost[i][1], in increasing order. We should fly A to the first half (cheaper cost to A) and B to the second half (cheaper cost to B).

Another explanation is first send each person to city A, compute the overall cost `sum`. Then we need to send half persons to city B who get more refund so that our cost will be minimized, refund[i] = cost[i][1] - cost[i][0]. Sort the refund list and add half of negative ones into the sume for the final answer.

#Greedy
