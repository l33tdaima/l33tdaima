# 418. Sentence Screen Fitting (Medium)

Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.

### Note:
1. A word cannot be split into two lines.
2. The order of words in the sentence must remain unchanged.
3. Two consecutive words in a line must be separated by a single space.
4. Total words in the sentence won't exceed 100.
5. Length of each word is greater than 0 and won't exceed 10.
6. 1 ≤ rows, cols ≤ 20,000.

### Example 1:
```
Input:
rows = 2, cols = 8, sentence = ["hello", "world"]

Output: 
1

Explanation:
hello---
world---

The character '-' signifies an empty space on the screen.
```
### Example 2:
```
Input:
rows = 3, cols = 6, sentence = ["a", "bcd", "e"]

Output: 
2

Explanation:
a-bcd- 
e-a---
bcd-e-

The character '-' signifies an empty space on the screen.
```
### Example 3:
```
Input:
rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]

Output: 
1

Explanation:
I-had
apple
pie-I
had--

The character '-' signifies an empty space on the screen.
```

## Solution
### Intuitive Approach
Rotating the word length, trying to fit them one by one. O(R*C). TLE

### Optimized Approach
We count word by word above, can we count row by row so that we can do O(R)?

- Imagine an infinite sentence `infStr` that are concatenated repeatedly. We want to cut it properly and put a piece at each row.
- We maintain a pointer ptr. The ptr points to a position at `infStr` where next row will start. Cutting and placing a piece at a row can be simulated by advancing the pointer in circle (mod).
- After advancing the pointer, if ptr points to a space, it means the piece can fit in row perfectly. If ptr points to the middle of a word, we must retreat the pointer to the beginning of the word.

#GOOGL
#GOOGL.MJ

#Dynamic Programming