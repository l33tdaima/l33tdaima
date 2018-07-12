# 294. Flip Game II (Medium)

You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to determine if the starting player can guarantee a win.

### Example:
```
Input: s = "++++"
Output: true 
Explanation: The starting player can guarantee a win by flipping the middle "++" to become "+--+".
```
### Follow up:
Derive your algorithm's runtime complexity.

## Solution
The recursion is I make a move and give my opponent the string after flipping and he can't make any move.

To improve and save any unnecessary recusive calls, memorize the pattern, canWin result in a map. 48ms -> 8ms in C++

#GOOGL

#Backtracking #Dynamic Programming

#Similar questions [#293e](../p293e/README.md) [#294m](../p294m/README.md)
