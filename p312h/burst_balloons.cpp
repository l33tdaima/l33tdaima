// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <cassert>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
    int recMaxCoin(vector<int>& coins, vector<vector<int>>& memo, int l, int r)
    {
        if (r == l + 1)
            return 0;
        if (memo[l][r] > 0)
            return memo[l][r];
        int ret = 0;
        for (int i = l + 1; i < r; ++i)
            ret = max(ret, coins[l] * coins[i] * coins[r] + recMaxCoin(coins, memo, l, i) + recMaxCoin(coins, memo, i, r));
        memo[l][r] = ret;
        return ret;
    }

public:
    // Top-down divide and conquer
    int maxCoinsDC(vector<int>& nums)
    {
        // burst balloons with zero reward
        vector<int> coins = { 1 };
        for (int n : nums)
            if (n > 0)
                coins.push_back(n);
        coins.push_back(1);
        vector<vector<int>> memo(coins.size(), vector<int>(coins.size(), 0));
        return recMaxCoin(coins, memo, 0, coins.size() - 1);
    }
    // Bottom-up dynamic programming
    int maxCoinsDP(vector<int>& nums)
    {
        // burst balloons with zero reward
        vector<int> coins = { 1 };
        for (int num : nums)
            if (num > 0)
                coins.push_back(num);
        coins.push_back(1);
        int n = coins.size();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        for (int range = 2; range < n; ++range) {
            for (int left = 0; left < n - range; ++left) {
                int right = left + range;
                for (int k = left + 1; k < right; ++k) {
                    dp[left][right] = max(
                        dp[left][right],
                        +coins[left] * coins[k] * coins[right] + dp[left][k] + dp[k][right]);
                }
            }
        }
        return dp[0][coins.size() - 1];
    }
};
// TEST
struct Test {
    vector<int> nums;
    int expected;
    void run()
    {
        Solution sol;
        int actualDC = sol.maxCoinsDC(nums);
        int actualDP = sol.maxCoinsDP(nums);
        cout << "Max coin to burst balloons [ ";
        for (int n : nums)
            cout << n << ", ";
        cout << "] -> " << actualDC << endl;
        assert(expected == actualDC);
        assert(expected == actualDP);
    }
};

int main(int argc, char const* argv[])
{
    vector<Test> tests = {
        { { 3, 1, 5, 8 },
            167 },
        { { 3, 0, 1, 5, 0, 8 },
            167 }
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
