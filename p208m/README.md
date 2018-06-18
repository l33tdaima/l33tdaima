# 208. Implement Trie (Prefix Tree) (Medium)

Implement a trie with insert, search, and startsWith methods.

### Example:
```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

### Note:
You may assume that all inputs are consist of lowercase letters a-z.

## Solution
Remember not to allocate new node for duplicate path.

#GOOGL #FB #MSFT #BBG #UBER #TWTR

#Trie #Design
