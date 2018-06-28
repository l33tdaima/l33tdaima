// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <stack>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int sz = nums.size();
        vector<int> ans(sz, -1);
        stack<int> ngstack;
        for (int i = 0; i < sz * 2; ++i) {
            while (!ngstack.empty() && nums[i % sz] > nums[ngstack.top()]) {
                ans[ngstack.top()] = nums[i % sz];
                ngstack.pop();
            }
            if (i < sz) { ngstack.push(i); }
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<int> nums;
    vector<int> expected;
    void run() {
        Solution sol;
        cout << "Next greater elements in [";
        for (int n: nums) {
            cout << n << ", ";
        }
        cout << "] -> [";
        vector<int> actual = sol.nextGreaterElements(nums);
        for (int i = 0; i < actual.size(); ++i) {
            cout << actual[i] << ", ";
            assert(actual[i] == expected[i]);
        }
        cout << "]" << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {1,2,1},
            {2,-1,2}
        },
        {
            {8,5,3},
            {-1,8,8}
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}