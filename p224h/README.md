# 224. Basic Calculator (Hard)

Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.

## Solution
1. Tokenize the string input;
2. Iterate the token list, do the following:
   - Alway push (, +, - into stack;
   - If number and top of stack is also number, *10+ to update;
   - If ), pop the items up to (, push back the number.
Note that 1 and 2 can be combined in one loop.

#Math #Stack
#GOOGL
