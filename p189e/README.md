# 189. Rotate Array (Easy)

Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

Related problem: Reverse Words in a String II

## Solution
[1,2,3,4,5,6,7] -> swap n - k to n - 1, and 0 to n - k - 1
[4,3,2,1,7,6,5] -> swap 0 to n -1
[5,6,7,1,2,3,4]

#AMZN #MSFT #BBG
#Array
