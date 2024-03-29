# 406. Queue Reconstruction by Height (Medium)

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

### Note:

The number of people is less than 1,100.

### Example:

```
Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
```

## Solution

For different h but the same k, how do we sort them? e.g. [6,0], [5,0], they all should be put in the beginning because k = 0.

- If we sort increasingly [5,0], [6,0], then put them in the final order based on k, after placing [5,0], when we put [6,0], we have to look at [5,0] as blindly put [6,0] at the begining breaks the constraint.
- If we sort decreasingly [6,0], [5,0], we can place [6,0], then place [5,0] using k = 0, because of the following observation.

People are only counting (in their k-value) taller or equal-height others standing in front of them. So a shortest person is completely irrelevant for all taller ones. But everybody else is relevant for this person - this person counts exactly everybody in front of them.

1. Sort the list by decreasing h and increasing k, we have
   [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]
2. Iterate the list, build the output by making sure constraint is satisfied when adding a LOCAL shortest person from the sorted list, his position is precisely determined by his k value.

- [7,0]: Insert [7,0] at index 0
- [7,0], [7,1]: Insert [7,1] at index 1
- [7,0], [6,1], [7,1]: Insert [6,1] at index 1
- [5,0], [7,0], [6,1], [7,1]: Insert [5,0] at index 0
- [5,0], [7,0], [5,2], [6,1], [7,1]: Insert [5,2] at index 2
- [5,0], [7,0], [5,2], [6,1], [4,4], [7,1]: Insert [4,4] at index 4

#GOOGL

#GOOGL.MJ 06/29/2018

#Greedy
