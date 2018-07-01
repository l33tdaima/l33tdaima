# 362. Design Hit Counter (Medium)

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.

### Example
```
HitCounter counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301); 
```

## Solution
### Clarifications
- Does true current time matters here? Seems no.

- Do we need getHits() to query history? Seems getHits(timestamp) where timestamp >= the most recent timestamp, user is responsible to pass it properly.

- How heavy is the load? Do we have concurrency problem?

### Algorithm
A queue to maintain the elements within 300 seconds, each element is an int of timestamp.
- Add new timestamp in hit(), and pop stale ones having now - t > 300.
- Return the size of queue for getHits() call.

#GOOGL #DBX

#Design
