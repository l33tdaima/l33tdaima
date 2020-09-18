# 1041. Robot Bounded In Circle (Medium)

On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degress to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

### Example 1:
```
Input: "GGLLGG"
Output: true
Explanation: 
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
```

### Example 2:
```
Input: "GG"
Output: false
Explanation: 
The robot moves north indefinitely.
```

### Example 3:
```
Input: "GL"
Output: true
Explanation: 
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
```
 
### Note:
1. 1 <= instructions.length <= 100
2. instructions[i] is in {'G', 'L', 'R'}

## Solution
Starting at the origin and face north (0,1), after one sequence of instructions,

- If robot return to the origin, he is obvious in an circle.
- If robot finishes with face not towards north, it will get back to the initial status in another one or three sequences.

The direction dx, dy is represented by `N: (0, 1), E: (1, 0), S: (0, -1), W: (-1, 0)`

The truth table of "L" should be
```
N (0, 1) -> W: (-1, 0)
W (-1, 0) -> S: (0, -1)
S (0, -1) -> E: (1, 0)
E (0, -1) -> N: (0, 1)
``` 
hency `dx, dy = -dy, dx`

#Math
