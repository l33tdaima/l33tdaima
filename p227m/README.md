# 227. Basic Calculator II (Medium)

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
Note: Do not use the eval built-in library function.

## Solution
1. Scan the string the evaluate all the * and / operator, and push the result along with other operands into array
2. Scan the resulting stack from left to right, sum them all up.

#String
#AIRBNB
