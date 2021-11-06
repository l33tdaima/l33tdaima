# 260. Single Number III (Medium)

Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in _any order_.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

### Example 1:

```
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
```

### Example 2:

```
Input: nums = [-1,0]
Output: [-1,0]
```

### Example 3:

```
Input: nums = [0,1]
Output: [1,0]
```

### Constraints:

- `2 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- Each integer in `nums` will appear twice, only two integers will appear once.

## Solution

- In the first pass, we XOR all elements in the array, and get the XOR of the two numbers we need to find. Note that since the two numbers are distinct, so there must be a set bit (that is, the bit with value '1') in the XOR result. Find
  out an arbitrary set bit (for example, the rightmost set bit).

- In the second pass, we divide all numbers into two groups, one with the aforementioned bit set, another with the aforementinoed bit unset. Two different numbers we need to find must fall into thte two distrinct groups. XOR numbers in each group, we can find a number in either group.

#Bit Manipulation

### Similar questions

[#136](../p136e/README.md) [#137](../p137m/README.md) [#260](../p260m/README.md)
