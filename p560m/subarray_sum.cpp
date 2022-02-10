// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k)
    {
        unordered_map<int, int> sumCount;
        sumCount[0] = 1;
        int sum = 0, ans = 0;
        for (int n : nums) {
            sum += n;
            if (sumCount.count(sum - k) > 0)
                ans += sumCount[sum - k];
            sumCount[sum]++;
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<int> nums;
    int k;
    int expected;

    void run()
    {
        Solution sol;
        int actual = sol.subarraySum(nums, k);
        cout << "# of subarrays of [";
        for (int n : nums)
            cout << n << ",";
        cout << "] sum to " << k << " -> " << actual << endl;
        assert(expected == actual);
    }
};

int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { { 1 }, 0, 0 },
        { { 1, 1, 1 }, 2, 2 },
        { { 1, 2, 3, 4, 5 }, 11, 0 },
        { { 3, 4, 7, 2, -3, 1, 4, 2 }, 7, 4 }
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
