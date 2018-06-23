// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int l = 0, r = nums.size() - 1;
        while (l < r) {
            int m = l + (r - l)/2;
            if (nums[m] > nums[m + 1]) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
};
// TEST
struct Test {
    vector<int> nums;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.findPeakElement(nums);
        cout << "Find any peak element of [ ";
        for (auto& n: nums) {
            cout << n << " ";
        }
        cout << "] by index -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {1, 2}, 1
        },
        {
            {2, 1}, 0
        },
        {
            {1, 2, 1}, 1
        },
        {
            {2, 1, 2}, 2
        },
        {
            {1,2,3,1}, 2
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
