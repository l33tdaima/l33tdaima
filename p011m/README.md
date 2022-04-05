# 11. Container With Most Water (Medium)

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

Notice that you may not slant the container.

### Example 1:

![example1](./example1.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

### Example 2:

```
Input: height = [1,1]
Output: 1
```

### Example 3:

```
Input: height = [4,3,2,1,4]
Output: 16
```

### Example 4:

```
Input: height = [1,2,1]
Output: 2
```

### Constraints:

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

#Array #Two Pointers #Greedy

#Similar questions [#11](../p011m/README.md) [#42](../p042h/README.md)
