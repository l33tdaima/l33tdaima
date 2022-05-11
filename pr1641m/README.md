# 1641. Count Sorted Vowel Strings (Medium)

Given an integer `n`, return the number of strings of length `n` that consist only of vowels `(a, e, i, o, u)` and are lexicographically sorted.

A string `s` is lexicographically sorted if for all valid `i`, `s[i]` is the same as or comes before `s[i+1]` in the alphabet.

### Example 1:

```
Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
```

### Example 2:

```
Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
```

### Example 3:

```
Input: n = 33
Output: 66045
```

### Constraints:

- `1 <= n <= 50`

## Solution

### DP 1-D

Time complexity O(5\*N), space complexity O(1)

Observe that the result is the sum of prefix sum of the previous breakdown of a, e, i, o, u

- n = 1: the result is 1 + 1 + 1 + 1 + 1
- n = 2: the result is 5 + 4 + 3 + 2 + 1
- n = 3: the result is 15 + 10 + 6 + 4 + 1

### Combination O(1)

Insert 4 seperators `|` into n characters, `C(n + 4, 4)` ways of insertions.

- The letter(s) before the 1st `|` is a,
- The letter(s) before the 2nd `|` is e,
- The letter(s) before the 3rd `|` is i,
- The letter(s) before the 4th `|` is o,
- The letter(s) after the 4th `|` is u.
