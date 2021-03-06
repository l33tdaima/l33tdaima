# 784. Letter Case Permutation (Medium)

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string. Return a list of all possible strings we could create. You can return the output in any order.

### Example 1:

```
Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
```

### Example 2:

```
Input: S = "3z4"
Output: ["3z4","3Z4"]
```

### Example 3:

```
Input: S = "12345"
Output: ["12345"]
```

### Example 4:

```
Input: S = "0"
Output: ["0"]
```

### Constraints:

- S will be a string with length between 1 and 12.
- S will consist only of letters or digits.

## Solution

We can do either straightfoward backtracking or bit manipulation which is a little bit tricky on mapping the bit to the location of characters in string, as we have mixture of letter and digits.

#FB #YELP #MSFT

#Backtracking #Bit Manipulation

#Similar questions [#]
