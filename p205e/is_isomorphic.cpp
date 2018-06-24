// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        assert(s.length() == t.length());
        int stMap[256] = {-1};
        int tsMap[256] = {-1};
        for (int i = 0; i < s.length(); ++i) {
            if (stMap[s[i]] != tsMap[t[i]]) { return false; }
            stMap[s[i]] = tsMap[t[i]] = i;
        }
        return true;
    }
};
int main(int argc, char const *argv[])
{
    vector<vector<string>> tests = {
        {"ab", "aa"},
        {"add", "egg"},
        {"foo", "bar"},
        {"paper", "title"},
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "'" << t[0] << "' and '" << t[1] << "' are isomorphic -> "
             << boolalpha << sol.isIsomorphic(t[0], t[1]) << endl;
    }
    return 0;
}
