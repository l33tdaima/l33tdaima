// Build program by
// g++ -std=c++11 find_longest_word.cpp -o test && ./test && rm test

#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
    int longestConsecutive(const vector<int>& nums)
    {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int ans = 0;
        for (int x : numSet) {
            if (!numSet.count(x - 1)) {
                int y = x + 1;
                while (numSet.count(y))
                    y++;
                ans = max(ans, y - x);
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<int> nums;
    int expected;
    void run() const
    {
        Solution sol;
        cout << "The length of the longest consecutive subsequence in [";
        for (int n : nums)
            cout << n << ", ";
        int actual = sol.longestConsecutive(nums);
        cout << "] -> " << actual << endl;
    }
};
int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { {}, 0 },
        { { 100 }, 1 },
        { { 100, 4, 200, 1, 3, 2 }, 4 },
        { { 0, 3, 7, 2, 5, 8, 4, 6, 0, 1 }, 9 },
    };
    for (const Test& t : tests)
        t.run();
    return 0;
}
