# 31. Next Permutation (Medium)

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

## Solution

4,3,5,1,2 -> 4,3,5,2,1
4,3,5,2,1 -> 4,5,1,2,3

The max permutation is all the numbers are in descending order, i.e. 4,3,2,1, once getting to this, the next permutation is going back to the minimal one, 1,2,3,4

1. Iterate backward till the index i where a[i-1] < a[i] (descending on the right of a[i-1]);
2. Iterate backward till another index j, where a[j] > a[i-1], this is number _just_ greater than a[i-1] we can swap them to get the new number on [i-1];
3. Reverse the number from a[i] which guarantees the next permutation for the original decending order.

#FB #AMZN #APPL #GOOGL

#Array

#Explore Facebook
