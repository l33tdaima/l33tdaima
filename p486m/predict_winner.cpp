// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
    int maxScore(vector<int>& nums, int hd, int tl, vector<vector<int>>& memo) {
        if (memo[hd][tl] == 0) {
            if (hd == tl) {
                memo[hd][tl] = nums[hd];
            } else {
                memo[hd][tl] = max(nums[hd] - maxScore(nums, hd + 1, tl, memo),
                                   nums[tl] - maxScore(nums, hd, tl - 1, memo));
            }
        }
        return memo[hd][tl];
    }
public:
    bool PredictTheWinnerRec(vector<int>& nums) {
        if (nums.size() == 0) { return true; }
        vector<vector<int>> memo(nums.size(), vector<int>(nums.size(), 0));
        return maxScore(nums, 0, nums.size() - 1, memo) >= 0;
    }
};
// TEST
struct Test {
    vector<int> nums;
    bool expected;
    void run() {
        Solution sol;
        cout << "The game for nums [ ";
        for (auto& n: nums) {
            cout << n << ", ";
        }
        bool actual = sol.PredictTheWinnerRec(nums);
        cout << "], can Player 1 win? -> "
             << boolalpha << actual
             << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {1,5,2}, false
        },
        {
            {1,5,233,7}, true 
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
