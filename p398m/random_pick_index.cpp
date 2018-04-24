// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <iostream>
#include <vector>
#include <initializer_list>
#include <cstdlib>

using namespace std;
class Solution {
    vector<int> d_nums;
public:
    Solution(vector<int> nums) {
        d_nums = std::move(nums);
    }
    
    int pick(int target) {
        int n = 0, ans = -1;
        for (int i = 0 ; i < d_nums.size(); i++) {
            if (d_nums[i] != target) continue;
            n++;
            if (rand() % n == 0) {
                ans = i;
            } // with prob 1/(n+1) to replace the previous index
        }
        return ans;
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.pick(target);
 */
int main(int argc, char* argv[])
{
    initializer_list<int> ilnums = {1,2,3,3,3};
    vector<int> nums(ilnums);
    Solution obj(nums);
    for (int i = 0; i < 10; ++i) {
        cout << obj.pick(3);
    }
    cout << endl;
    return 0;
}
// g++ -std=c++11 -o p398m/random_pick p398m/random_pick_index.cpp
