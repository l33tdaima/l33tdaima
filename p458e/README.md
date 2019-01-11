# 458. Poor Pigs (Easy)

There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour.

Answer this question, and write an algorithm for the follow-up general case.

### Follow-up:

If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.

## Solution
With 2 pigs, and `minutesToTest / minutesToDie = 60 / 15 = 4` tests, we can test buckets arranged in 5 by 5 matrix. By introducing another pig, we increase another dimension to solve `5 * 5 * 5` buckets problem.

#Baidu
