// Build program by
// g++ -std=c++11 find_longest_word.cpp -o test && ./test && rm test

#include <vector>
#include <unordered_set>
#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet;
        for (int n: nums) {
           numSet.insert(n);
        }
        int longest = 0;
        for (int n: nums) {
            if (numSet.find(n - 1) != numSet.end()) {
                continue;
            }
            int next = n + 1;
            while (numSet.find(next) != numSet.end()) {
                next ++;
            }
            longest = max(longest, next - n);
        }
        return longest;
    }
};
// TEST
struct Test {
    initializer_list<int> ilist;
    void run() const {
        Solution sol;
        cout << "The longest consecutive sequence length in [";
        for (int n: ilist) {
            cout << n << ", ";
        }
        vector<int> nums(ilist);
        cout << "] -> " << sol.longestConsecutive(nums) << endl;
    }
};
int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {{}},
        {{100}},
        {{6, 5, 4}},
        {{100, 4, 200, 1, 3, 2}}
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}