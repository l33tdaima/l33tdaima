// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    bool canWin(string s) {
        for (int i = 0; i < int(s.length()) - 1; ++i) {
            if (s[i] == '+' && s[i+1] == '+') {
                s[i] = s[i+1] = '-';
                if (canWin(s) == false) { return true; }
                s[i] = s[i+1] = '+';
            }
        }
        return false;
    }
private:
    bool canWinMemoHelper(string s, unordered_map<string, bool>& memo) {
        if (s.length() < 2) { return false; }
        if (memo.count(s)) { return memo[s]; }
        for (int i = 0; i < int(s.length()) - 1; ++i) {
            if (s[i] != '+' || s[i+1] != '+') { continue; }
            s[i] = s[i+1] = '-';
            if (canWinMemoHelper(s, memo) == false) {
                s[i] = s[i+1] = '+';
                memo[s] = true;
                return true;
            }
            s[i] = s[i+1] = '+';
        }
        memo[s] = false;
        return false;
    }
public:
    bool canWinMemo(string s) {
        unordered_map<string, bool> memo;
        return canWinMemoHelper(s, memo);
    }
};
// TEST
struct Test {
    string s;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.canWinMemo(s);
        cout << "Starting player can win game '" << s << "' -> "
             << boolalpha << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        { "", false },
        {"++++", true },
        {"+++++", false },
        {"++++--+++", true },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
