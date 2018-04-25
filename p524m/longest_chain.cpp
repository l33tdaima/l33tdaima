// Build program by
// g++ -std=c++11 longest_word.cpp -o test && ./test && rm test

#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    int longestChain(vector<string>& words) {
        if (words.size() == 0) { return 0; }
        // Sort the word list in a length increasing order
        sort(words.begin(), words.end(),
            [](const string& a, const string& b) -> bool {
                return a.size() < b.size();
            });
        // A hash table storing the word and its longest chain length
        unordered_map<string, int> wordChainMap;
        int maxChainLen = 0, minWordLen = words[0].size();
        // Iterate the input list, build up the longest chain for each
        // word in the hash table, we will know the global max after iteration.
        for (const string& w: words) {
            int localMax = 1;
            if (w.size() > minWordLen) { // avoid deleting for shortest words
                // try deleting each char in the word, see if reduced word is met
                for (int i = 0; i < w.size(); ++i) {
                    string afterDel = w;
                    afterDel.replace(i, 1, "");
                    if (wordChainMap.count(afterDel)) {
                        localMax = max(localMax, wordChainMap[afterDel] + 1);
                    }
                }
            }
            wordChainMap[w] = localMax;
            maxChainLen = max(maxChainLen, localMax);
        }
        return maxChainLen;
    }
};
// TEST
struct Test {
    initializer_list<string> ilist;
    void run() const {
        Solution sol;
        cout << "Longest chain in dictionary ";
        vector<string> w(ilist);
        cout << "[";
        for (const string& s:w) {
            cout << s << ", ";
        }
        cout << "] -> " << sol.longestChain(w) << endl;
    }
};
int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {{}},
        {{"a", "b", "ba", "bca","bda","bdca"}},
        {{"abc", "b", "c", "d","e","bdca"}}
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}
