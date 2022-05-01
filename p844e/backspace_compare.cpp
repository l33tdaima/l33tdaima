// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <cassert>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    bool backspaceCompare(string S, string T)
    {
        int s = S.length() - 1, t = T.length() - 1;
        while (s >= 0 || t >= 0) {
            for (int skip = 0; s >= 0 && (skip || S[s] == '#'); --s) {
                skip += S[s] == '#' ? 1 : -1;
            }
            for (int skip = 0; t >= 0 && (skip || T[t] == '#'); --t) {
                skip += T[t] == '#' ? 1 : -1;
            }
            if (s >= 0 && t >= 0 && S[s] == T[t]) {
                s--;
                t--;
            } else {
                return s == -1 && t == -1;
            }
        }
        return true;
    }
};
// TEST
struct Test {
    string S;
    string T;
    bool expected;
    void run()
    {
        Solution sol;
        bool actual = sol.backspaceCompare(S, T);
        cout << "Backspace compare(\"" << S
             << "\", \"" << T << "\") -> "
             << boolalpha << actual << endl;
        assert(expected == actual);
    }
};

int main(int argc, char const* argv[])
{
    vector<Test> tests = {
        { "ab#c",
            "ad#c",
            true },
        { "ab##",
            "c#d#",
            true },
        { "a##c",
            "#a#c",
            true },
        { "a#c",
            "b",
            false }
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
