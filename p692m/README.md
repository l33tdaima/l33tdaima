692. Top K Frequent Words (Medium)

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

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
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
```
### Note:
- You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
- Input words contain only lowercase letters.

### Follow up:
Try to solve it in O(n log k) time and O(n) extra space.

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