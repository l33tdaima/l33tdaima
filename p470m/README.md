# 470. Implement Rand10() Using Rand7() (Medium)

Given the API rand7 which generates a uniform random integer in the range 1 to 7, write a function rand10 which generates a uniform random integer in the range 1 to 10. You can only call the API rand7 and you shouldn't call any other API. Please don't use the system's Math.random().

*Notice that* Each test case has one argument n, the number of times that your implemented function rand10 will be called while testing. 

Follow up:
1. What is the expected value for the number of calls to rand7() function?
2. Could you minimize the number of calls to rand7()?

### Example 1:
```
Input: n = 1
Output: [2]
```

### Example 2:
```
Input: n = 2
Output: [2,8]
```

### Example 3:
```
Input: n = 3
Output: [3,8,10]
```

### Constraints:
- 1 <= n <= 10^5

## Solution
https://www.quora.com/How-do-you-design-a-rand7-function-using-a-rand5-function 

### Concept 1: Rolling again
Imagine you have a single six sided dice. If I wanted you to get "Heads or Tails" based on this dice, you can roll it, and if you get 1, say heads, if you get 2, say tails, and if you get anything else roll again. This approach will guarantee an equiprobable H/T, but notice how you may be rolling the die many times.

### Concept 2: Folding to Map
In the above example of dice, you could have mapped the other values and minimized the waste. For example, 1,2,3 (= heads), 4,5,6 (= tails). Or mapping even numbers to heads, and odd numbers to tails. This way you can re-use and prevent re-rolls.

### Concept 3: Expanding Range
Assume you had rand10, that will give you one digit, if you wanted rand100 or rand1000, you can call rand10 to generate each digit. 
So 

`rand100 = 10*rand10()+1*rand10()`, and
`rand1000 = 100*rand10()+10*rand10()+1*rand10()`

#Random #Rejection Sampling

