// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <memory>
#include <string>

using namespace std;
class Trie {
    enum {
        MAXC = 26
    };
    unique_ptr<Trie> next[MAXC] = { nullptr };
    int wordLen = 0; // if this node ends a word, store the length
public:
    /** Initialize your data structure here. */
    Trie() { }
    
    /** Inserts a word into the trie. */
    void insert(string word) {
        Trie* p = this;
        for (char c: word) {
            if (p->next[c - 'a'] == nullptr) {
                p->next[c - 'a'] = unique_ptr<Trie>(new Trie());
            }
            p = p->next[c - 'a'].get();
        }
        p->wordLen = word.length();
    }
    
    /** Returns if the word is in the trie. */
    bool search(string word) {
        Trie* p = this;
        for (char c: word) {
            if (p->next[c - 'a']) {
                p = p->next[c - 'a'].get();
            } else {
                return false;
            }
        }
        return p->wordLen > 0;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    bool startsWith(string prefix) {
        Trie* p = this;
        for (char c: prefix) {
            if (p->next[c - 'a']) {
                p = p->next[c - 'a'].get();
            } else {
                return false;
            }
        }
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * bool param_2 = obj.search(word);
 * bool param_3 = obj.startsWith(prefix);
 */
int main(int argc, char const *argv[])
{
    Trie trie;
    trie.insert("apple");
    assert(trie.search("apple") == true);
    assert(trie.search("app") == false);
    assert(trie.startsWith("app") == true);
    trie.insert("app");
    assert(trie.search("app") == true);
    return 0;
}

