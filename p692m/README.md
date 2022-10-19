692. Top K Frequent Words (Medium)

Given an array of strings `words` and an integer `k`, return the `k` most frequent strings.

Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

### Example 1:

```
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
```

### Example 2:

```
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the
number of occurrence being 4, 3, 2 and 1 respectively.
```

### Constraints:

- `1 <= words.length <= 500`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.
- `k` is in the range `[1, The number of unique words[i]]`

### Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

## Solution

### Heap Approach

- Build a (word, count) hash table like the following for example 1, O(N) and O(N) extra space
  ```
  i 2
  love 2
  leetcode 1
  coding 1
  ```
- Iterate the hash table and push each entry into a min heap of size k, sort by count then word. O(N logK)
- Pop the heap to output

### Trie Approach

- Build a (word, count) hash table like the following for example 1, O(N) and O(N) extra space
- Create a bucket of Tries, index is the frequency of words with the same freqency, size is O(N)
- For each (word, count) in the hash table, add words into trie of the corresponding frequency(index)
- Output the words from the highest bucket until we have k entries.

#AMZN #BBG #UBER #YELP #Pocket Gems

#Hash Table #Heap #Trie
