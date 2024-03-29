# 986. Interval List Intersections (Medium)

You are given two lists of closed intervals, `firstList` and `secondList`, where `firstList[i] = [starti, endi]` and `secondList[j] = [startj, endj]`. Each list of intervals is pairwise _disjoint_ and in _sorted order_.

Return the intersection of these two interval lists.

A _closed interval_ `[a, b]` (with `a <= b`) denotes the set of real numbers `x` with `a <= x <= b`.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of `[1, 3]` and `[2, 4]` is `[2, 3]`.

### Example 1:

![pic](./interval1.png)

```
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
```

### Example 2:

```
Input: firstList = [[1,3],[5,9]], secondList = []
Output: []
```

### Example 3:

```
Input: firstList = [], secondList = [[4,8],[10,12]]
Output: []
```

### Example 4:

```
Input: firstList = [[1,7]], secondList = [[3,10]]
Output: [[3,7]]
```

### Constraints:

- `0 <= firstList.length, secondList.length <= 1000`
- `firstList.length + secondList.length >= 1`
- `0 <= starti < endi <= 10^9`
- `endi < starti+1`
- `0 <= startj < endj <= 10^9`
- `endj < startj+1`

#Two Pointers

#Similar questions [#56](../p056m/README.md) [#986](../p986m/README.md)

#FB #UBER
