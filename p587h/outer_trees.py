from typing import List


class Solution:
    def outerTrees(self, trees: List[List[int]]) -> List[List[int]]:
        """Computes the convex hull of a set of 2D points.

        Input: an iterable sequence of (x, y) pairs representing the points.
        Output: a list of vertices of the convex hull in counter-clockwise order,
          starting from the vertex with the lexicographically smallest coordinates.
        Implements Andrew's monotone chain algorithm. O(n log n) complexity.
        """
        # Sort the points lexicographically (tuples are compared lexicographically).
        # Remove duplicates to detect the case we have just one unique point.
        points = sorted(map(tuple, trees), key=lambda x: (x[0], x[1]))

        # 2D cross product of OA and OB vectors, i.e. z-component of their 3D cross product.
        # Returns a positive value, if OAB makes a counter-clockwise turn,
        # negative for clockwise turn, and zero if the points are collinear.
        def cross(o, a, b):
            return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

        # Build hull
        def build(points):
            hull = []
            for p in points:
                while len(hull) >= 2 and cross(hull[-2], hull[-1], p) < 0:
                    hull.pop()
                hull.append(p)
            return hull

        # Concatenation of the lower and upper hulls gives the convex hull.
        # Last point of each list is omitted because it is repeated at the
        # beginning of the other list.
        return list(set(build(points) + build(points[::-1])))


# TESTS
for trees, expected in [
    (
        [[1, 1], [2, 2], [2, 0], [2, 4], [3, 3], [4, 2]],
        [[1, 1], [2, 0], [3, 3], [2, 4], [4, 2]],
    ),
    ([[1, 2], [2, 2], [4, 2]], [[4, 2], [2, 2], [1, 2]]),
]:
    sol = Solution()
    actual = sol.outerTrees(trees)
    print("Outer perimeters of trees", trees, "->", actual)
    assert sorted(actual) == sorted(map(tuple, expected))
