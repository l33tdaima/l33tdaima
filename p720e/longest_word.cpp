// Build program by
// g++ -std=c++11 longest_word.cpp -o test && ./test && rm test

#include <string>
#include <vector>
#include <unordered_set>
#include <algorithm>
#include <initializer_list>
#include <iostream>
using namespace std;

class Solution {
public:
    string longestWord(vector<string>& words) {
        // sort in increasing order
        sort(words.begin(), words.end()); 
        
        unordered_set<string> seen;
        string ans = "";
        for (string w:words) {
            if (w.size() == 1 ||
                seen.count(w.substr(0, w.size() - 1))) {
                if (w.size() > ans.length()) {
                    ans = w;
                }
                seen.insert(w);
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    initializer_list<string> ilist;

    void run() const {
        Solution sol;
        cout << "The longest word built from dictionary [";
        bool first = true;
        for (auto i: ilist) {
            if (!first) cout << ",";
            cout << i;
            first = false;
        }
        vector<string> words(ilist);
        cout << "] -> " << sol.longestWord(words) << endl;
    }
};

int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {{"w","wo","wor","worl","world"}},
        {{"a", "banana", "app", "appl", "ap", "apply", "apple"}}
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}
