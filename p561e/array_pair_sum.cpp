#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int ans = 0;
        for (int i = 0; i < nums.size(); i += 2) ans += nums[i];
        return ans;
    }
};
int main(int argc, char* argv[]) {
    vector<int> nums = {1, 4, 3, 2};
    Solution sol; 
    cout << "Array Paritition I -> " << sol.arrayPairSum(nums) << endl;
    return 0;
}