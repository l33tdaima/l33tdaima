# 3. Longest Substring Without Repeating Characters (Medium)

Given a string, find the length of the longest substring without repeating characters.

### Example 1:

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints:

- 0 <= s.length <= 5 \* 10^4
- s consists of English letters, digits, symbols and spaces.

### Example 4:

```
Input: s = ""
Output: 0
```

## Solution

Inspired by p076h template

```cpp
int lengthOfLongestSubstring(string s) {
    vector<int> map(128,0);
    int counter=0, begin=0, end=0, d=0;
    while(end<s.size()){
        if(map[s[end++]]++>0) counter++;
        while(counter>0) if(map[s[begin++]]-->1) counter--;
        d=max(d, end-begin); //while valid, update d
    }
    return d;
}
```

#AMZN #CSCO #GOOGL #MSFT #FB #BBG #ADBE #YELP

#Hash Table #Two Pointer #String #Slideing Window

#Similar question [#003m](../p003m/README.md) [#076h](../p076h/README.md) [#159h](../p159h/README.md)

#Explore Facebook
