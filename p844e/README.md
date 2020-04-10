# 844. Backspace String Compare (Easy) (Medium)

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

### Example 1:
```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

### Example 2:
```
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

### Example 3:
```
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

### Example 4:
```
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

### Note:
- 1 <= S.length <= 200
- 1 <= T.length <= 200
- S and T only contain lowercase letters and '#' characters.

### Follow up:
Can you solve it in O(N) time and O(1) space?

## Solution
Use a stack to simulate each S and T by pushing an alphabet and popping a #,  then compare the resulting strings. O(N) of time and O(N) of space.

To achieve O(1) space without maintaining a stack, it is impossible to iterate forward without changing the input string because you don't know if a char will be deleted by the following '#', the idea will be iterate backward, when seeing a '#' we know it will skip a valid char before it.

#GOOGL #FB

#Stack #Two Pointers
