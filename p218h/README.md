# 218. The Skyline Problem (Hard)

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are _given the locations and height of all the buildings_ as shown on a cityscape photo (Figure A), write a program to _output the skyline_ formed by these buildings collectively (Figure B).
![Figure A](skyline1.jpg) ![Figure B](skyline2.jpg)

The geometric information of each building is represented by a triplet of integers `[Li, Ri, Hi]`, where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that `0 ≤ Li, Ri ≤ INT_MAX`, `0 < Hi ≤ INT_MAX`, and `Ri - Li > 0`. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: `[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]`.

The output is a list of _"key points"_ (red dots in Figure B) in the format of `[ [x1, y1], [x2, y2], [x3, y3], ... ]` that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:`[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]`.

Notes:

- The number of buildings in any input list is guaranteed to be in the range [0, 10000].
- The input list is already sorted in ascending order by the left x position Li.
- The output list must be sorted by the x position.
- There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]

## Solution 1

The brutal force way is to construct a histogram like 1-dimensional array h of which each element is the bar height of size 1 width.

```
forEach rectangle r from input:
    forEach heightmap bar h[i] starting from r.left and ending at r.right:
        h[i] = max(r.height, h[i])
Iterate h to generate output
```

Apparently it is O(N^k) complexity, k depends on how many overlap we have.

## Solution 2

1. Extract and sort the critial points, including both left corner and right corner.
2. Scan across the critical points from left to right.
   1. When we encounter the left edge of a rectangle, we add that rectangle to the heap with its height as the key.
   2. When we encounter the right edge of a rectangle, we remove that rectangle from the heap.
   3. Finally, any time we encounter a critical point, after updating the heap we set the height of that critical point to the value peeked from the top of the heap.

```
for each critical point c
    c.y gets the height of the tallest rectangle over c
```

O(NlogN), where heapifying takes O(logN).

#GOOGL #FB #MSFT #TWTR #YELP

#Divide and Conquer #Heap #Binary Indexed Tree #Segment Tree
