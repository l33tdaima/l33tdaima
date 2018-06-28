// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <unordered_map>
#include <stack>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& findNums, vector<int>& nums) {
        unordered_map<int, int> gmap;
        stack<int> gstack;
        for (int n: nums) {
            while (!gstack.empty() && n > gstack.top()) {
                gmap[gstack.top()] = n;
                gstack.pop();
            }
            gstack.push(n);
        }
        vector<int> ans;
        for (int findn: findNums) {
            ans.push_back(gmap.count(findn) > 0 ? gmap[findn] : -1);
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<int> findNums;
    vector<int> nums;
    vector<int> expected;
    void run() {
        Solution sol;
        cout << "Next greater element in [";
        for (int f: findNums) {
            cout << f << ", ";
        }
        cout << "] -> [";
        vector<int> actual = sol.nextGreaterElement(findNums, nums);
        for (int i = 0; i < actual.size(); ++i) {
            cout << actual[i] << ", ";
            // assert(actual[i] == expected[i]);
        }
        cout << "]" << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {4,1,2},
            {1,3,4,2},
            {-1,3,-1}
        },
        {
            {2,4},
            {1,2,3,4},
            {3,-1}
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
