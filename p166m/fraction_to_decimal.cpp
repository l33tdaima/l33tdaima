// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <string>
#include <unordered_map>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        return fractionToDecimal((int64_t)numerator, (int64_t)denominator);
    }

    string fractionToDecimal(int64_t n, int64_t d) {
        if (n == 0) { return "0"; }
        string ans;
        if (n < 0 ^ d < 0) { ans += "-"; }
        n = abs(n); d = abs(d);
        // integral part
        ans += to_string(n / d);
        if (n % d == 0) { return ans; }
        ans += ".";
        unordered_map<int, int> seen;
        for (int64_t r = n % d; r != 0; r = r % d) {
            if (seen.count(r)) {
                ans.insert(seen[r], "(");
                ans += ")";
                break;
            }
            seen[r] = ans.size();
            r *= 10;
            ans += to_string(r / d);
        }
        return ans;
    }
};
struct Test {
    int n;
    int d;
    string expected;
    void run() {
        Solution sol;
        string act = sol.fractionToDecimal(n, d);
        cout << n << " / " << d << " = " << act << endl;
        assert(act == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {0, 1, "0"},
        {4, 2, "2"},
        {1, 3, "0.(3)"},
        {1, 6, "0.1(6)"},
        {1, 7, "0.(142857)"},
        {1, 11, "0.(09)"},
        {1, 12, "0.08(3)"},
        {3, 11, "0.(27)"},
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
