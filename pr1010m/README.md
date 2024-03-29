# 1010. Pairs of Songs With Total Durations Divisible by 60 (Medium)

In a list of songs, the i-th song has a duration of `time[i]` seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i < j with `(time[i] + time[j]) % 60 == 0`.

### Example 1:

```
Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
```

### Example 2:

```
Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
```

### Note:

1. 1 <= time.length <= 60000
2. 1 <= time[i] <= 500

### Hints

- We only need to consider each song length modulo 60.
- We can count the number of songs with (length % 60) equal to r, and store that in an array of size 60.

## Solution

This is a variant of two sum problem which we preprocess the input by modulo 60, and seeking for two sum of 60. Using a map to store the number scanned.

Since the modulo 60 results fall into a range of [0, 59], we can use an array instead of map, which is faster.

#Array

#GS #AMZN

#Similar questions [#974](../p974m/README.md) [#1010](../pr1010m/README.md)
