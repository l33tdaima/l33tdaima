// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <unordered_map>

#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> ht;
        for (int i = 0; i < nums.size(); ++i) {
            int key = target - nums[i];
            if (ht.count(key) != 0) {
                vector<int> res = {ht[key], i};
                return res;
            }
            ht[nums[i]] = i;
        }
        return vector<int>();
    }
};

// TEST
struct Test {
    vector<int> nums;
    int target;
    
    void run() {
        Solution sol;
        auto actual = sol.twoSum(nums, target);
        cout << "Two sum of [";
        for (auto n : nums) { cout << n << ","; }
        cout << "] target " << target << " -> [";
        for (auto i : actual) { cout << i << ","; }
        cout << "]" << endl;
    }
};

int main(int argc, char *argv[]) {
    vector<Test> tests = {
        {{3,2,4}, 6},
        {{2,1,3}, 3},
        {{3,2,1,5,6,4}, 10},
        {{3,2,1,5,6,4}, 6},
    };
    for (auto t : tests) t.run();
    return 0;
}
