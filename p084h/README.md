# 84. Largest Rectangle in Histogram (Hard)

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.

## Solution
http://www.geeksforgeeks.org/largest-rectangle-under-histogram/
For every bar ‘x’, we calculate the area with ‘x’ as the smallest bar in the rectangle, where we need to identify the left and right boundary of the area. We keep pushing the bar into stack when the height is increasing, and start calulate the area when height is decreasing by poping the previous bars. The area is calculated by multiplying this smallest bar by the index difference.

#Array #Stack
