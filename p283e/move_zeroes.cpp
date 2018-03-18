#include <vector>
using namespace std;
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int k = 0;
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] != 0) {
                nums[k++] = nums[i];
            }
        }
        while (k < nums.size()) {
            nums[k++] = 0;
        }
    }
};
// g++ -std=c++11 -c p283e/move_zeroes.cpp && rm move_zeroes.o
