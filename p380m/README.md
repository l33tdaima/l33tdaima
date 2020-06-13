# 380. Insert Delete GetRandom O(1) (Medium)
Design a data structure that supports all following operations in average O(1) time.

1. insert(val): Inserts an item val to the set if not already present.
2. remove(val): Removes an item val from the set if present.
3. getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

### Example:
```
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
```

## Solution
- We need an array to store the values to support O(1) getRandom().
- We need a map of item value to index of array to support O(1) insert and delete.
- When deleting,
  - Swap the index of to-be-deleted with the last one.

#GOOGL #FB #AMZN #UBER #TWTR #YELP

#Array #Hash Table #Design

#Similar questions [#380m](../p380m/README.md) [#381h](../p381h/README.md)
