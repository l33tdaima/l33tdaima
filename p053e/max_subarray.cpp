// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <limits>
#include <iostream>

using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int ans = numeric_limits<int>::min(), dp = 0;
        for (int n: nums) {
            dp = max(dp + n, n);
            ans = max(ans, dp);
        }
        return ans;
    }
};

// TESTS
struct Test {
    vector<int> nums;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.maxSubArray(nums);
        cout << "Largest sum of subarray in [";
        for (int n: nums) cout << n << ",";
        cout << "] -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {{-1}, -1}, 
        {{-2, 1, -3}, 1},
        {{-2, -1, -3}, -1},
        {{-2, 1, -3, 4}, 4},
        {{-2, 1, -3, 4, -1, 2, 1, -5, 4}, 6},
    };
    for (auto& t: tests) t.run();
}
