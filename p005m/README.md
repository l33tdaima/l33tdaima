# 5. Longest Palindromic Substring (Medium)

Given a string `s`, find the longest palindromic substring in `s`. You may assume that the maximum length of s is 1000.

### Example 1:

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

### Example 2:

```
Input: "cbbd"
Output: "bb"
```

### Example 3:

```
Input: s = "a"
Output: "a"
```

### Example 4:

```
Input: s = "ac"
Output: "a"
```

## Solution

### Brutal Force

The brutal force approach require checking `n*(n-1)/2` possible substrings if they are palindrome and how long, during the check you will have to scan the string again, which is O(N^3) complexity.

## Dynamic Programming

This suitable for DP as this is a optimization problem for multi-stage decision making. The hidden problem is to find whether a substring `s[i..j]` is a palindrome, which is the state of the problem. Knowing this state matrix, we can derive the longest substring for those which state is true.
The state transition is

```
State[i, j] = true if State[i+1, j-1] is true and s[i] == s[j]
State[i, j] = false otherwise
```

### Expand Around Center approach

A better Expand Around Center approach. Use each char in string as center (odd case) or plus the next char (even case), expand to find the longest palindrome for this particular case. O(N^2) in time and O(1) in space.

### O(N)

The fastest O(N) solution is Manacher's Algorithm, though it is not trivial to code.

#MSFT #AMZN #BBG

#String #Dynamic Programming

#Explore Facebook
