// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int divide(int dividend, int divisor) {
        if (!divisor || (dividend == INT_MIN && divisor == -1)) {
            return INT_MAX;
        }
        bool negative = (dividend < 0) ^ (divisor < 0);
        long long n = labs(dividend);
        long long d = labs(divisor);
        int ans = 0;
        while (n >= d) {
            long long md = d, mul = 1;
            while (n >= (md << 1)) {
                md <<= 1;
                mul <<= 1;
            }
            n -= md;
            ans += mul; 
        }
        return negative ? -ans : ans;
    }
};
// TEST
int main(int argc, char const *argv[])
{
    vector<vector<int>> tests = {
        {10, 3},
        {7, -3},
        {INT_MIN, -1},
    };
    Solution sol;
    for (auto& t: tests) {
        cout << t[0] << "/" << t[1] << " = " 
             << sol.divide(t[0], t[1])
             << endl;
    }
    return 0;
}
