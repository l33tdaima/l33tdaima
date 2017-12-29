# 149. Max Points on a Line (Hard)

Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

## Solution
(x1,y1) (x2,y2) and (x3,y3) (x4,y4) on the same stright line means (y2-y1)/(x2-x1) == (y4-y3)/(x4-x3), this needs to be simplified rational, such as 2/3 instead of 4/6. We then need to hash each rational's count for the combinations of points based on one point, and find the max. The time complexity has to be O(n^2). 

The sign of (y2-y1)/(x2-x1) and (y4-y3)/(x4-x3) needs to be considered, which determines if we need to handle sign when storing in the map. Luckily it can be mathematically proved that if divide (y2-y1)/(x2-x1) by gcd, they become codiretional. Or we can use examples to verify.

#LNKD #TWTR #APPL
