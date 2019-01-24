# 453. Minimum Moves to Equal Array Elements (Easy/Medium)

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

### Example:
```
Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

## Solution
### Intuitive Approach
Simulate the process by find the maximum and incrementing each number except the maxinum. O(n^2 * k) where n is the length of the array and k is the difference between maximum element and minimum element.

### Sorted Approach
Sort the array. In each round, max of this round is `a[n-1]`, min is `a[0]`, we need `a[n-1] - a[0]` to level up the min to max by holding max. The next round, another `a[n-2] - a[0]` moves need to be summed up. Time complexity of O(n log n).

### Math Approach
This approach is based on the idea that adding 1 to all the elements except one is equivalent to decrementing 1 from a single element, since we are interested in the relative levels of the elements which need to be equalized. Thus, the problem is simplified to find the number of decrement operations required to equalize all the elements of the given array.

To find this value, we loop to find the sum of all numbers and the min, then substract min * N from the sum. Time complexity drops to O(n) now.

#Coursera

#Math

#Similar questions [#453](../p453e/README.md) [#462m](../p462m/README.md)
