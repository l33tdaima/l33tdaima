// Build program by
// g++ -std=c++11 find_longest_word.cpp -o test && ./test && rm -rf test

#include <cassert>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string findLongestWord(string s, vector<string>& d)
    {
        string ans = "";
        for (string& w : d) {
            if (w.length() > ans.length() || (w.length() == ans.length() && w < ans)) {
                int i = 0;
                for (char c : s) {
                    if (i < w.length() && c == w[i])
                        i++;
                }
                if (i == w.length())
                    ans = w;
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    string s;
    vector<string> d;
    string expected;
    void run()
    {
        Solution sol;
        string actual = sol.findLongestWord(s, d);
        cout << "The longest word in [" << endl;
        for (const string& w : d) {
            cout << w << ", ";
        }
        cout << "\n] matching \"" << s << "\" -> " << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { "abpcplea", { "ale", "apple", "monkey", "plea" }, "apple" },
        { "abpcplea", { "a", "b", "c", "d" }, "a" },
        { "zz", { "ale", "apple", "monkey", "plea" }, "" },
    };
    for (Test& t : tests)
        t.run();
    return 0;
}
