# 268. Missing Number (Easy)

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

### Example 1
```
Input: [3,0,1]
Output: 2
```
### Example 2
```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```
### Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

## Solution
Two different O(1) space complexity approaches
1. XOR all the indices [0..n-1] and numbers and the number n, all the matches will even out and the missing number will leave at the end.
2. Sum all the numbers up, the missing number is (n)*(n+1)/2 - sum.

#FB #MSFT #BBG

#Array #Math #Bit Manipulation
