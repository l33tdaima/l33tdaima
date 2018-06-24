# 249. Group Shifted Strings (Medium)

Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"

Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

### Example:
```
Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
```

## Solution
- We need a helper function to generate the signature of each string, it could be shifting the first char to 'a', or distance between every two characters.
- For each string, add them into a hash table key by the signature.
- Dump the hash table into output list.

#GOOGL #UBER
#GOOGL.MJ

#Hash Table #String