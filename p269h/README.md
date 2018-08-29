# 269. Alien Dictionary (Hard)

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

### Example 1:
```
Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
Output: "wertf"
```
### Example 2:
```
Input:
[
  "z",
  "x"
]
Output: "zx"
```
### Example 3:
```
Input:
[
  "z",
  "x",
  "z"
] 
Output: "" 
Explanation: The order is invalid, so return "".
```
### Note:
1. You may assume all letters are in lowercase.
2. You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
3. If the order is invalid, return an empty string.
4. There may be multiple valid order of letters, return any one of them is fine.

## Solution
Formulate the problem by doing a *topological sorting* on a graph, where vertices are the letters and edges derived from each column of words, and we need to be able to *detect the possible cyclic* graph.

For example 1, the graph looks like,
```
w -> e 
e -> r
f -> <empty>
t -> f
r -> t

```

### Challenge 1
When building the graph, we need to be able to also store the single node as the output string must contain all the letter showed up in dictionary.

### Challenge 2
When doing topological sorting, we also need to be able to detect cycle and once detected return empty string. To achieve that, instead of using a boolean set to remember visited, we need to store the status of visited node,
- non-existing: no such node in graph
- existing with value 1: visiting
- existing with 2: visited

#GOOGL #FB #TWTR #SNAP #Airbnb #Pocket Gems

#Graph #Topological Sort
