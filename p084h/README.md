# 84. Largest Rectangle in Histogram (Hard)

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.

### Example
![pic](histogram_area.png)
```
Input: [2,1,5,6,2,3],
return 10.
```

## Solution
http://www.geeksforgeeks.org/largest-rectangle-under-histogram/
### Intuitive Approach
For each bar, search left and right for the first bar smaller than it, which are the boundary of rectangle area,`area = (r - l - 1) * height[i]`, then we get the max after loop. O(n^2)

### Optimal Approach
Similar to above, for every bar ‘x’, we calculate the area with ‘x’ as the smallest bar in the rectangle, where we need to identify the left and right boundary of the area. To achieve O(n), the left bound search can be achieved by a stack storing the increasing history, while right bound search is gradually built up by moving the current bar.

We keep pushing the bar into stack when the height is increasing, and start calulate the area when height is decreasing by poping the previous bars. The area is calculated by multiplying this smallest bar by the index difference.

#Array #Stack

#Similar questions [#084h](../p084h/README.md) [#085h](../p085h/README.md)