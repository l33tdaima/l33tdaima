# 1025. Divisor Game (Easy)

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < N and N % x == 0.
Replacing the number N on the chalkboard with N - x.
Also, if a player cannot make a move, they lose the game.

Return True if and only if Alice wins the game, assuming both players play optimally.

### Example 1:
```
Input: 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.
```

### Example 2:
```
Input: 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
```
### Note:
1. 1 <= N <= 1000

## Solution
### Math Induction
- N = 1: Alice loses
- N = 2: Alice chooses 1 and wins
- N = 3: Alice can only choose 1 then N = 2 for Bob, she loses
- N = 4: Alice should chooses 1 and leave N = 3 for Bob, she wins

Note factors of odds must be odds, factors of evens can be odds and evens. When N is even, Alice can find any odd factor and leave a odd number to Bob, Bob can only choose an odd factor and return an even number back to Alice, eventually Alice gets 2 and win. 

### Another way to think
If Alice will lose for N, then Alice will must win for N+1, by choosing 1 and leave N to Bob.

#Visa

#Math #Dynamic Programming
