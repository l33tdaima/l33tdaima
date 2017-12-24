# 53. Maximum Subarray (Easy)

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Solution
Divide and Conquer is really an overkill and suboptimal solution, the best O(n) idea is scan the array and add each element into a local sum, update the global sum if a larger one is found. And if the sum drops below zero, we need to reset the local sum to zero, which means all the elements before the point has negative contribution, we should not consider them in the future subarray. 

#MSFT #BBG #LNKD
#Array #Dynamic Programming
