# 1675. Minimize Deviation in Array (Hard)

You are given an array `nums` of `n` positive integers.

You can perform two types of operations on any element of the array any number of times:

- If the element is _even_, _divide_ it by `2`.
  - For example, if the array is `[1,2,3,4]`, then you can do this operation on the last element, and the array will be `[1,2,3,2]`.
- If the element is _odd_, _multiply_ it by `2`.
  - For example, if the array is `[1,2,3,4]`, then you can do this operation on the first element, and the array will be `[2,2,3,4]`.

The _deviation_ of the array is the _maximum difference_ between any two elements in the array.

Return the _minimum deviation_ the array can have after performing some number of operations.

### Example 1:

```
Input: nums = [1,2,3,4]
Output: 1
Explanation: You can transform the array to [1,2,3,2], then to [2,2,3,2], then the deviation will be 3 - 2 = 1.
```

### Example 2:

```
Input: nums = [4,1,5,20,3]
Output: 3
Explanation: You can transform the array after two operations to [4,2,5,5,3], then the deviation will be 5 - 2 = 3.
```

### Example 3:

```
Input: nums = [2,10,8]
Output: 3
```

## Constraints:

- `n == nums.length`
- `2 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`

## Solution

- Intuition 1: we can divide even numbers multiple times - till we get an odd number, but we can only double odd numbers once. After that, it will become an even number.
- Intuition 2: Even numbers never increase.

- Double all the odds make them even so that we only have one type of operation
- Between the top of the heap and the smallest number. While the top of the heap is even, remove it, divide, and put back to the heap.

#Heap #Ordered Map
