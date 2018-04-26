// Build program by
// g++ -std=c++11 find_longest_word.cpp -o test && ./test && rm test

#include <string>
#include <vector>
#include <algorithm>
#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    string findLongestWord(string s, vector<string>& d) {
        sort(d.begin(), d.end(),
            [](const string& a, const string& b) -> bool {
                if (a.length() == b.length()) {
                    return a < b;
                } else {
                    return a.length() > b.length();
                }
            });
        for (const string& w: d) {
            int i = 0;
            for (char c: s) {
                if (c == w[i]) {
                    i++;
                    if (i == w.length()) return w;
                }
            }
        }
        return "";
    }
    string findLongestWordNoSort(string s, vector<string>& d) {
        string ans = "";
        for (const string& w: d) {
            int i = 0;
            for (char c: s) {
                if (c == w[i]) {
                    i++;
                    if (i == w.length()) {
                        if (w.length() > ans.length() ||
                            (w.length() == ans.length() && w < ans)) {
                            ans = w;
                        }
                        break;
                    }
                }
            }
        }
        return ans; 
    }
};
// TEST
struct Test {
    string s;
    initializer_list<string> ilist;
    void run() const {
        Solution sol;
        cout << "The longest word in dictionary [" << endl;
        vector<string> d(ilist);
        for (const string& w: d) {
            cout << w << ", ";
        }
        cout << "\n] matching \"" << s << "\" -> ";
        cout << sol.findLongestWord(s, d) 
             << " && "
             << sol.findLongestWordNoSort(s, d) << endl;
    }
};
int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {"abpcplea", {"ale","apple","monkey","plea"}},
        {"abpcplea", {"a","b","c","d"}},
        {"zz", {"ale","apple","monkey","plea"}},
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}
