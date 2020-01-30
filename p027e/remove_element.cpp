// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int len = 0; // len of vector after removal
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] != val) {
                nums[len++] = nums[i];
            }
        }
        return len;
    }
};
// TEST
struct Test {
    vector<int> nums;
    int val;
    void run() {
        cout << "Before removal: [";
        for (int n: nums) cout << n << ",";
        cout << "]" << endl;

        Solution sol;
        int len = sol.removeElement(nums, val);

        cout << "After removal: [";
        for (int i = 0; i < len; ++i) {
            cout << nums[i] << ",";
        }
        cout << "]\n------" << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {}, 0
        },
        {
            {3,2,2,3}, 2
        },
        {
            {0,1,2,2,3,0,4,2}, 2
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
