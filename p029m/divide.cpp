// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <cassert>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int divide(int dividend, int divisor)
    {
        if (dividend == INT_MIN && divisor == -1)
            return INT_MAX;
        // abs(INT_MIN) is undefined behavior according http://www.cplusplus.com/reference/cstdlib/abs/
        long n = abs(static_cast<long>(dividend)), d = abs(static_cast<long>(divisor));
        int ans = 0, x = 0;
        while (n >= d) {
            for (x = 0; n - (d << x << 1) >= 0; x++) { }
            n -= d << x;
            ans += 1 << x;
        }
        return (dividend > 0) ^ (divisor > 0) ? -ans : ans;
    }
};
// TEST
int main(int argc, char const* argv[])
{
    vector<vector<int>> tests = {
        { 10, 3, 3 },
        { 7, -3, -2 },
        { 0, 1, 0 },
        { 1, 1, 1 },
        { -2147483648, -1, INT_MAX },
        { -2147483648, 3, -715827882 }, // works on Leetcode C++ compiler, but not on Apple clang 12
    };
    Solution sol;
    for (auto& t : tests) {
        int actual = sol.divide(t[0], t[1]);
        cout << t[0] << "/" << t[1] << " = "
             << actual << endl;
        assert(actual == t[2]);
    }
    return 0;
}
