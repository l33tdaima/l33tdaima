# 151. Reverse Words in a String (Medium)

Given an input string, reverse the string word by word.

### Example:
```
Input: "the sky is blue",
Output: "blue is sky the".
```

### Note:
- A word is defined as a sequence of non-space characters.
- Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
- You need to reduce multiple spaces between two words to a single space in the reversed string.

## Solution
Reverse the each word first while erasing white spaces, then reverse the whole string 
```
    the  sky is blue
-> eht yks si  eulb
-> blue is sky the
```

#MSFT #BBG #APPL #SNAP #YELP

#String

#Similar questions [#151m](../p151m/README.md) [#186m](../p186m/README.md)