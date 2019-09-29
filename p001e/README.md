# 1. Two Sum (Easy)

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have *exactly* one solution, and you may not use the same element twice.

### Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Solution
Scan the array: 
Adding pair<number, index> into a hash table and check if (target - number) already exists.

#MSFT #FB #AMZN #BB #UBER #LNKD #APPL #AIRBNB #YELP #YHOO #ADBE #DBX

#Array #Hash Table

#Similar questions [#001e](../p001e/README.md) [#167e](../p167e/README.md) [#170e](../p170e/README.md) [p653e](../p653e/README.md)
