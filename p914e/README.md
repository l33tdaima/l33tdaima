# 914. X of a Kind in a Deck of Cards (Easy)

In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

- Each group has exactly X cards.
- All the cards in each group have the same integer.
 
### Example 1:
```
Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
```

### Example 2:
```
Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
```

### Example 3:
```
Input: [1]
Output: false
Explanation: No possible partition.
```

### Example 4:
```
Input: [1,1]
Output: true
Explanation: Possible partition [1,1]
```

### Example 5:
```
Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]
```

### Note:
1. 1 <= deck.length <= 10000
2. 0 <= deck[i] < 10000

## Solution
Say there are C_i cards of number i. These must be broken down into piles of X cards each, ie. C_i % X == 0 for all i.

Thus, X must divide the greatest common divisor of C_i. If this greatest common divisor g is greater than 1, then X = g will satisfy. Otherwise, it won't.


#GOOGL

#Array #Math
