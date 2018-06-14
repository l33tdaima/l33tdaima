// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <utility>
#include <iostream>

using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (nums.size() == 0) { return 0; }
        int ans = nums[0];
        for (int i = 1, localmin = ans, localmax = ans; i < nums.size(); ++i) {
            if (nums[i] < 0) {
                swap(localmin, localmax);
            }
            localmax = max(nums[i], localmax * nums[i]);
            localmin = min(nums[i], localmin * nums[i]);
            ans = max(ans, localmax);
        }
        return ans;
    }
};
// -2, -2, -2
// 0, 0, -2
// -1, 2, 0
// TEST
int main(int argc, char const *argv[])
{
    vector<vector<int>> tests = {
        {},
        {1},
        {1, -2},
        {-1, -3},
        {-2, 0, -1},
        {3, -1, 4},
        {3, -1, 2, 6},
        {2, 3, -2, 4},
        {-2, -3, 0, -4},
        {-2, 1, -3, -4},
        {-2, 1, -3, 1, -4},
        {-2, 1, -3, 1, -4, -2},
        {-2, 1, -3, 1, -4, -2, 0, 49}
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "Max product of subarray -> " << sol.maxProduct(t) << endl;
    }
    return 0;
}
