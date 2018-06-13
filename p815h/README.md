# 815. Bus Routes (Hard)

We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.

We start at bus stop S (initially not on a bus), and we want to go to bus stop T. Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

### Example:
```
Input: 
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
Explanation: 
The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
```
### Note:
1 <= routes.length <= 500.
1 <= routes[i].length <= 500.
0 <= routes[i][j] < 10 ^ 6.

## Solution
- Prepare a map which maps a bus stop to the route id list
- Enqueue tuple(S, transfer) where transfer = 0
- Do BFS search from start stop S until we find T
  - Pop a stop from queue (initially it is S)
  - Mark stop visited
  - For each route available for this stop S and for each stop on this route
    - Return tuple.second if stop == T
    - If this stop has not been visited, enqueue (stop, transfer + 1) 

```
Example above
enqueue (1,0): queue = [(1,0)]
dequeue (1,0) enqueue 2->7: queue = [(2,1), (7,1)]
dequeue (2,1) nothing to enqueue: queue = [(7,1)]
dequeue (7,1) enqueue 3->6: queue = [(3,2), (6,2)]
dequeue (3,2) nothing to enqueue: queue = [(6,2)]
dequeue (6,2) return 2
```

#GOOGL

#Breadth-first Search #Graph