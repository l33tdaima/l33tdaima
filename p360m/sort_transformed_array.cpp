// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    vector<int> sortTransformedArray(vector<int>& nums, int a, int b, int c) {
        vector<int> ans(nums.size(), 0);
        int i = 0, step = 1; // index when writing output, and iteration direction
        if (a > 0 || (a == 0 && b > 0)) {
            i = nums.size() - 1;
            step = -1;
        }
        for (int l = 0, r = nums.size() - 1; l <= r; i += step) {
            int lval = a * nums[l] * nums[l] + b * nums[l] + c;
            int rval = a * nums[r] * nums[r] + b * nums[r] + c;
            if ((step > 0 && lval < rval) || (step < 0 && lval > rval)) {
                ans[i] = lval;
                l++;
            } else {
                ans[i] = rval;
                r--;
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<int> nums;
    int a;
    int b;
    int c;
    void run() {
        Solution sol;
        vector<int> actual = sol.sortTransformedArray(nums, a, b, c);
        cout << "Sort transformed array -> [";
        for (int n: actual) cout << n << " ";
        cout << "]" << endl;
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {-4,-2,2,4},
            0, 1, 1
        },
        {
            {-4,-2,2,4},
            0, -1, 1
        },
        {
            {-4,-2,2,4},
            1, 3, 5
        },
        {
            {-4,-2,2,4},
            -1, 3, 5
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
