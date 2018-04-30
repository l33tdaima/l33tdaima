# How To Design A Cache System

## Scope: 
- Cache the computation results which could be expensive to get
- Store in a key-value pairs form

## System: Basic LRU (Least Recent Used) Cache
- If A exists in the cache, we just return immediately, and make it the most recently used.
- If not and the cache has extra storage slots, we fetch resource A and return to the client. In addition, insert A into the cache.
- If the cache is full, we evict the resource that is least recently used and replace it with resource A.

Refer to one of the [implementation](../p146h/README.md).

## Solution: Eviction Policy
- Random Replacement (RR) – As the term suggests, we can just randomly delete an entry.
- Least Frequently Used (LFU) – We keep the count of how frequent each item is requested and delete the one least frequently used.
- W-TinyLFU – In a nutshell, the problem of LFU is that sometimes an item is only used frequently in the past, but LFU will still keep this item for a long while. W-TinyLFU solves this problem by calculating frequency within a time window.

## Solution: Concurrency
- The common solution of course is using a lock. How to optimize it?
- Split the cache into multiple shards and have a lock for each of them so that clients won’t wait for each other if they are updating cache from different shards. However, given that shards of hot entries will be more often locked than others.
- Use commit logs, where we can store all the mutations into logs rather than update immediately. And then some background processes will execute all the logs asynchronously.

## Scalability
- Distributed cache to mulitiple machines.
- The general strategy is to keep a hash table that maps each resource to a machine. then direct the request to that machine. At machine it works similar to local cache.
