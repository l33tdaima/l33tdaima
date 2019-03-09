// g++ -std=c++11 *.cpp -o test && ./test && rm -f tes
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    bool checkPossibility(vector<int>& nums) {
        int p = -1;
        for (int i = 0; i < nums.size() - 1; ++i) {
            if (nums[i] > nums[i + 1]) {
                if (p >= 0) return false;
                p = i;
            }
        }
        return p < 0 || p == 0 || p == nums.size() - 2 ||
               nums[p - 1] <= nums[p + 1] ||
               nums[p] <= nums[p + 2];
    }
};
// TEST
struct Test {
    vector<int> nums;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.checkPossibility(nums);
        cout << "Could become non-decresing -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {{4, 2, 3}, true},
        {{4, 2, 1}, false},
        {{3, 4, 2, 3}, false}
    };
    for (auto& t: tests) t.run();
    return 0;
}
