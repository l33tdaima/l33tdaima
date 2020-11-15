# 458. Poor Pigs (Easy)

There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour.

Answer this question, and write an algorithm for the follow-up general case.

### General case:

If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the poisonous bucket within p minutes? There is exactly one bucket with poison.

### Note:

- A pig can be allowed to drink simultaneously on as many buckets as one would like, and the feeding takes no time.
- After a pig has instantly finished drinking buckets, there has to be a cool down time of m minutes. During this time, only observation is allowed and no feedings at all.
  -Any given bucket can be sampled an infinite number of times (by an unlimited number of pigs).

## Solution

With 2 pigs, and `minutesToTest / minutesToDie = 60 / 15 = 4` tests, we can test buckets arranged in 5 by 5 matrix.

```
1  2  3  4  5
6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
```

Now use one pig to find the row (make it drink from buckets 1, 2, 3, 4, 5, wait 15 minutes, make it drink from buckets 6, 7, 8, 9, 10, wait 15 minutes, etc). Use the second pig to find the column (make it drink 1, 6, 11, 16, 21, then 2, 7, 12, 17, 22, etc).

By introducing another pig, we increase another dimension to solve `5 * 5 * 5` buckets problem.

In general, we can solve up to (⌊minutesToTest / minutesToDie⌋ + 1)^pigs buckets this way.

#Baidu
