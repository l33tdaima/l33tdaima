#23. Merge k Sorted Lists (Hard)

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

#### Solution:
Use a (min) heap to store the head of each linked list, and extract one at a time, once move the node to the sorted result, push the next to the heap keep them sorted.

Leverage C++ STL heap util instead of JS.
