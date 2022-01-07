# 382. Linked List Random Node (Medium)

Given a singly linked list, return a random node's value from the linked list. Each node must have the **same probability** of being chosen.

Implement the `Solution` class:

- `Solution(ListNode head)` Initializes the object with the integer array nums.
- `int getRandom()` Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be choosen.
### Example 1:

```
Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
```

### Constraints:

- The number of nodes in the linked list will be in the range `[1, 10^4]`.
- `-10^4 <= Node.val <= 10^4`
- At most `10^4` calls will be made to getRandom.

## Solution

### Problem:

Choose k (k = 1 in this problem) entries from n numbers. Make sure each number is selected with the probability of k/n

### Basic idea:

Choose 1, 2, 3, ..., k first and put them into the reservoir.
For k+1, pick it with a probability of k/(k+1), and randomly replace a number in the reservoir.
For k+i, pick it with a probability of k/(k+i), and randomly replace a number in the reservoir.
Repeat until k+i reaches n

#Reservoir Sampling

#Similar questions [#382](../p382m/README.md) [#398](../p398m/README.md)
