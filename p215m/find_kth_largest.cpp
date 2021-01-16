// Build program by
// g++ -std=c++11 find_kth_largest.cpp -o test && ./test && rm test

#include <algorithm>
#include <cassert>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

class Solution {
public:
    int findKthLargestV1(vector<int>& nums, int k)
    {
        nth_element(nums.begin(), nums.begin() + k - 1, nums.end(), greater<int>());
        return nums[k - 1];
    };

    int findKthLargestV2(vector<int>& nums, int k)
    {
        priority_queue<int> maxheap(nums.begin(), nums.end()); // maxheap
        for (int i = 0; i < k - 1; ++i)
            maxheap.pop();
        return maxheap.top();
    }

    int findKthLargestV3(vector<int>& nums, int k)
    {
        priority_queue<int, vector<int>, greater<int>> minheap;
        for (int n : nums) {
            minheap.push(n);
            if (minheap.size() > k)
                minheap.pop();
        }
        return minheap.top();
    }
};
// TESTS
struct Test {
    vector<int> nums;
    int k;
    int expected;

    void run()
    {
        Solution sol;
        int actual = sol.findKthLargestV3(nums, k);
        cout << "Find #" << k << " largest from [ ";
        bool first = true;
        for (int i : nums) {
            if (!first)
                cout << ",";
            cout << i;
            first = false;
        }
        cout << " ] -> " << actual << endl;
        assert(expected == actual);
        assert(expected == sol.findKthLargestV1(nums, k));
        assert(expected == sol.findKthLargestV2(nums, k));
    }
};

int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { { 3, 2, 1, 5, 6, 4 }, 1, 6 },
        { { 3, 2, 1, 5, 6, 4 }, 2, 5 },
        { { 3, 2, 1, 5, 6, 4 }, 3, 4 },
        { { 3, 2, 1, 5, 6, 4 }, 4, 3 },
        { { 3, 2, 1, 5, 6, 4 }, 5, 2 },
        { { 3, 2, 1, 5, 6, 4 }, 6, 1 },
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
