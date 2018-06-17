# 460. LFU Cache (Hard)

Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.

### Follow up:
Could you do both operations in O(1) time complexity?

### Example:
```
LFUCache cache = new LFUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

## Solution
- The first KV HashMap for key value store, map to the pointer to the list node containing the actual value
- The second Freq HashMap key by freq/count, value by the double linked list of element in the order of MRU to LRU
- The minFreq to keep track which key in the Freq map should be evicted

#GOOGL #AMZN

#Design

#Similar questions [#146h](../p146h/README.md) [#460h](../p460h/README.md)
