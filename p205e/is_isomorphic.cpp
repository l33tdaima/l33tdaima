// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <cassert>
#include <iostream>
#include <string>
#include <vector>

using namespace std;
class Solution {
public:
    bool isIsomorphic(string s, string t)
    {
        int stMap[256] = { 0 };
        int tsMap[256] = { 0 };
        for (int i = 0; i < s.length(); ++i) {
            if (stMap[s[i]] != tsMap[t[i]])
                return false;
            stMap[s[i]] = tsMap[t[i]] = i + 1;
        }
        return true;
    }
};
struct Test {
    string s;
    string t;
    bool expected;

    void run()
    {
        Solution sol;
        bool actual = sol.isIsomorphic(s, t);
        cout << "'" << s << "' and '" << t << "' are isomorphic -> "
             << boolalpha << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const* argv[])
{
    vector<Test> tests = {
        { "add", "egg", true },
        { "foo", "bar", false },
        { "paper", "title", true },
        { "ab", "aa", false },
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
