# 528. Random Pick with Weight (Medium)

Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

### Note:
1. 1 <= w.length <= 10000
2. 1 <= w[i] <= 10^5
3. pickIndex will be called at most 10000 times.

### Example 1:
```
Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
```

### Example 2:
```
Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
```

### Explanation of Input Syntax:
The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.

## Solution
If w[i] value is not big, we can spread the value to a list, i.e. w[1] = 5 becomes [1,1,1,1,1], when picking an index, we can just generate random number within the overal list size and return the index stored. O(1) pickIndex call but waste space and construction time.

To balance, accumulate the weights and do binary search for the smallest partial sum which is greater than the random number.

#Binary Search #Random
