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
    int longestChain(vector<string>& w) {
        if (w.size() == 0) { return 0; }
        // sort the words by word length
        sort(w.begin(), w.end(), [](const string& a, const string& b) -> bool
        {
            return a.size() < b.size();
        });

        // Hash table storing word and its longest chain length
        unordered_map<string, int> wordChainMap;
        int maxChainLen = 0, minWordLen = w[0].size();
        for (const string& s: w) {
            if (s.size() == minWordLen) {
                wordChainMap[s] = 1;
                maxChainLen = 1;
                continue;
            } 
            for (int i = 0; i < s.size(); ++i) {
                string reduced = s;
                reduced.replace(i, 1, "");
                if (wordChainMap.count(reduced)) {
                    // found another word in library after deleting
                    int len = wordChainMap[reduced] + 1;
                    wordChainMap[s] = len;
                    maxChainLen = max(maxChainLen, len);
                }
            }
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
