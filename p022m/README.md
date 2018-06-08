# 22. Generate Parentheses (Medium)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

## Solution
### Plus Approach
The idea here is to only add '(' and ')' that we know will guarantee us a solution (instead of adding too many close). Once we add a '(' we will then discard it and try a ')' which can only close a valid '('. Function arguments `open` and `close` represent how many open and close parenthesis have been matched. Recursion ends when both reach to n.

### Minus Approach
In this approach, function arguments `open` and `close` represent remaining open parenthesis and the close parenthesis to be added, which initiated by call with `n` and `0`.

#GOOGL #UBER #Zenefits

#Backtracking
