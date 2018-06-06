# 202. Happy Number (Easy)

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

### Example: 
```
Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

## Solution
To follow up solve in O(1) space restriction, we can do Floyd cycle detection similar to linked list.
``` cpp
bool isHappy(int n) {
    int slow, fast;
    slow = fast = n;
    do {
        slow = next(slow);
        fast = next(fast);
        fast = next(fast);
    } while(slow != fast);
    if (slow == 1) return 1;
    else return 0;
}
```
#UBER #TWTR #Airbnb

#Hash Table #Math