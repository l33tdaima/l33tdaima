// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int largestPerimeter(vector<int>& A) {
        sort(A.begin(), A.end(), [](int a, int b) -> bool { return a > b; });
        for (int i = 2; i < A.size(); ++i) {
            if (A[i] + A[i - 1] > A[i - 2]) return A[i] + A[i - 1] + A[i - 2];
        }
        return 0;
    }
};
// TESTS
struct Test {
    vector<int> input;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.largestPerimeter(input);
        cout << "Largest perimeter of a triangle -> " << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {2,1,2}, 5
        },
        {
            {1,2,1}, 0
        },
        {
            {3,2,3,4}, 10
        },
        {
            {3,6,2,3}, 8
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
