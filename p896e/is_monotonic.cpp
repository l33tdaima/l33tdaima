// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    bool isMonotonic(vector<int>& A) {
        int pcmp = 0;
        for (int i = 1; i < A.size(); ++i) {
            int cmp = A[i] - A[i - 1];
            if (cmp == 0) continue;
            // if (cmp * pcmp < 0) return false;
            if (pcmp != 0 && (cmp ^ pcmp) < 0) return false;
            pcmp = cmp;
        }
        return true;
    }
};
// TESTS
struct Test {
    vector<int> input;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.isMonotonic(input);
        cout << "Is { ";
        for (int n: input) cout << n << " ";
        cout << "} monotonic -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {1,2,2,3},
            true
        },
        {
            {6,5,4,4},
            true
        },
        {
            {1,3,2},
            false
        },
        {
            {1,3,4,5},
            true
        },
        {
            {1,1,1},
            true
        },
        {
            {1,1,1,9},
            true
        },
    };
    for (auto& t: tests) t.run();
    return 0;
}