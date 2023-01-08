# 149. Max Points on a Line (Hard)

Given an array of points where `points[i] = [xi, yi]` represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

### Example 1:

```
Input: points = [[1,1],[2,2],[3,3]]
Output: 3
```

### Example 2:

```
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
```

### Constraints:

- `1 <= points.length <= 300`
- `points[i].length == 2`
- `-10^4 <= xi, yi <= 10^4`
- All the points are unique.

## Solution

(x1,y1) (x2,y2) and (x3,y3) (x4,y4) on the same stright line means (y2-y1)/(x2-x1) == (y4-y3)/(x4-x3), this needs to be simplified rational, such as 2/3 instead of 4/6. We then need to hash each rational's count for the combinations of points based on one point, and find the max. The time complexity has to be O(n^2).

The sign of (y2-y1)/(x2-x1) and (y4-y3)/(x4-x3) needs to be considered, which determines if we need to handle sign when storing in the map. Luckily it can be mathematically proved that if divide (y2-y1)/(x2-x1) by gcd, they become codiretional. Or we can use examples to verify.

#LNKD #TWTR #APPL

#Array #Hash Table #Math #Geometry
