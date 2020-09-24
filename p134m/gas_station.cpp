// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <limits>
#include <iostream>
#include <cassert>

using namespace std;

class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int sum = 0, max = numeric_limits<int>::min(), maxIndex = gas.size() - 1;
        for (int i = gas.size() - 1; i >= 0; --i) {
            sum += gas[i] - cost[i];
            if (sum > max) {
                max = sum;
                maxIndex = i;
            }
        }
        if (sum < 0) {
            return -1;
        } else { 
            return maxIndex;
        }
    }
};
// TEST
struct Test {
    vector<int> gas;
    vector<int> cost;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.canCompleteCircuit(gas, cost);
        cout << "Can complete curcuit using gas[";
        for (int& g: gas) {
            cout << g << " ";
        }
        cout << "] and cost[";
        for (int& c: cost) {
            cout << c << " ";
        }
        cout << "] -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {5},
            {4},
            0
        },
        {
            {1,3},
            {2,2},
            1
        },
        {
            {1,2,3,4,5},
            {3,4,5,1,2},
            3
        },
        {
            {5,8,2,8},
            {6,5,6,6},
            3
        }
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
