# 421. Maximum XOR of Two Numbers in an Array (Medium)

Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.

Follow up: Could you do this in O(n) runtime?

### Example 1:
```
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
```

### Example 2:
```
Input: nums = [0]
Output: 0
```

### Example 3:
```
Input: nums = [2,4]
Output: 6
```

### Example 4:
```
Input: nums = [8,10,2]
Output: 10
```

### Example 5:
```
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
```

### Constraints:
- 1 <= nums.length <= 2 * 10^4
- 0 <= nums[i] <= 2^31 - 1

## Solution
The idea is to iteratively determine what would be each bit of the final result from MSB to LSB. And it narrows down the candidate group iteration by iteration. 

e.g. assume input are a,b,c,d,...z, 26 integers in total. In first iteration, if you found that a, d, e, h, u differs on the MSB(most significant bit), so you are sure your final result's MSB is set. Now in second iteration, you try to see if among a, d, e, h, u there are at least two numbers make the 2nd MSB differs, if yes, then definitely, the 2nd MSB will be set in the final result. And maybe at this point the candidate group shinks from a,d,e,h,u to a, e, h. Implicitly, every iteration, you are narrowing down the candidate group, but you don't need to track how the group is shrinking, you only cares about the final result.

#Bit Manipulation #Trie
