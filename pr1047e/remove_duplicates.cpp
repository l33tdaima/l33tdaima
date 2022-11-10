// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string removeDuplicates(string s)
    {
        string ans = "";
        for (char c : s) {
            if (ans.size() == 0 || ans.back() != c) {
                ans.push_back(c);
            } else {
                ans.pop_back();
            }
        }
        return ans;
    }
};

// TESTS
int main(int argc, char* argv[])
{
    vector<vector<string>> tests = {
        { "abcd", "abcd" },
        { "abbaca", "ca" }
    };
    Solution sol;
    for (auto& t : tests) {
        string actual = sol.removeDuplicates(t[0]);
        cout << "Remove duplicates in " << t[0] << " -> " << actual << endl;
        assert(actual == t[1]);
    }
    return 0;
}
