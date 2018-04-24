// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <unordered_map>

#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> ht;
        for (int i = 0; i < nums.size(); ++i) {
            int key = target - nums[i];
            if (ht.find(key) != ht.end()) {
                vector<int> res;
                res.push_back(ht[key]);
                res.push_back(i);
                return res;
            } else {
                ht[nums[i]] = i;
            }
        }
        return vector<int>();
    }
};

// TEST
struct Test {
    initializer_list<int> numsIList;
    int target;
    
    void run() {
        vector<int> nums(numsIList);
        Solution sol;
        auto res = sol.twoSum(nums, target);
        cout << "Two sum of [";
        for (auto n : nums) { cout << n << ","; }
        cout << "] target " << target << " -> (";
        for (auto i : res) { cout << i << ","; }
        cout << ")" << endl;
    }
};
// g++ -std=c++11 two_sum.cpp -o test && ./test && rm test
int main(int argc, char *argv[]) {
    initializer_list<Test> tests = {
        {{3,2,4}, 6},
        {{2,1,3}, 3},
        {{3,2,1,5,6,4}, 10},
        {{3,2,1,5,6,4}, 6},
    };
    for (auto t : tests) { t.run(); }
    return 0;
}
