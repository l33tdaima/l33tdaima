// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <cassert>
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target)
    {
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int key = target - nums[i];
            if (seen.count(key) != 0) {
                return { seen[key], i };
            } else {
                seen[nums[i]] = i;
            }
        }
        return vector<int>();
    }
};

// TEST
struct Test {
    vector<int> nums;
    int target;
    vector<int> expected;
    void run()
    {
        Solution sol;
        auto actual = sol.twoSum(nums, target);
        cout << "Two sum in [";
        for (auto n : nums) {
            cout << n << ", ";
        }
        cout << "] for target " << target << " -> ";
        cout << "[" << actual[0] << ", " << actual[1] << "]" << endl;
        assert(actual[0] == expected[0] && actual[1] == expected[1]);
    }
};

int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { { 2, 7, 11, 15 }, 9, { 0, 1 } },
        { { 3, 2, 4 }, 6, { 1, 2 } },
        { { 3, 3 }, 6, { 0, 1 } },
    };
    for (auto t : tests)
        t.run();
    return 0;
}
