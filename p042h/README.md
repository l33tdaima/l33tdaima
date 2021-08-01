# 42. Trapping Rain Water (Hard)

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it is able to trap after raining.

### Example 1:

![example](rainwatertrap.png)

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

### Example 2:

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

## Solution

### Intuitive Approach

Compute the amount virtically bar by bar. The possbile water each bar can trap is determined by the lower value of its left max height and max right height,

```
trap += min(left_max[i], right_max[i]) - height[i]
```

If the current height is a higher ground than either side, it won't trap any water apparently. `left_max` and `right_max` can be precalculated by scanning the array linearly (DP).

### Improvement

In the previous approach, we can find `left_max` array is always growing from left to right, `right_max` is growing from right to left. So we can scan from left end and right end in one pass,

- height[l] < height[r]
  - height[l] goes up: update left_max
  - height[l] goes down: trap += left_max - height[l]
  - l++
- height[l] >= height[r]
  - height[r] goes up: update right_max
  - height[r] goes down: trap += right_max - height[r]
  - r--

### Stack Approach

Stack based approach accumulates results horizontally.

- Use stack to store the indices of the bars.
- Iterate the array:
  - While stack is not empty and height[i] > height[stack.top()]
    - top = stack.pop()
    - Find out the bounded_height = min(stack.top(), current) - height[top]
    - Find out the width = current - stack.top() - 1
    - trap += bounded_height \* width
  - Push current index to the stack
  - Move to the next bar index

#GOOGL #AMZN #BBG #TWTR #APPL #Zenefits

#Array #Dynamic Programming #Stack #Two Pointers
