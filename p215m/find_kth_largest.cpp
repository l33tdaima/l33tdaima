// Build program by
// g++ -std=c++11 find_kth_largest.cpp -o test && ./test && rm test

#include <vector>
#include <queue>
#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq(nums.begin(), nums.end());
        for (auto i = 0; i < k - 1; ++i) {
            pq.pop();
        }
        return pq.top();
    }
};
// TESTS
struct Test {
    initializer_list<int> ilist;
    int k;
    int expected;

    void run() const {
        Solution sol;
        vector<int> nums(ilist);
        auto res = sol.findKthLargest(nums, k);
        cout << "Find #" << k << " largest from [ ";
        bool first = true;
        for (auto i: ilist) {
            if (!first) cout << ",";
            cout << i;
            first = false;
        }
        cout << " ] -> " << res << ", "
             << std::boolalpha << (res == expected) << endl;
    }
};

int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {{3,2,1,5,6,4}, 1, 6},
        {{3,2,1,5,6,4}, 2, 5},
        {{3,2,1,5,6,4}, 3, 4},
        {{3,2,1,5,6,4}, 4, 3},
        {{3,2,1,5,6,4}, 5, 2},
        {{3,2,1,5,6,4}, 6, 1},
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}
