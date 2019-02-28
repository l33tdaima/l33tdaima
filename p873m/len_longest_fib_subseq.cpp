// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    int lenLongestFibSubseqV1(vector<int>& A) {
        unordered_set<int> set(A.begin(), A.end());
        int ans = 0;
        for (int i = 0; i < A.size(); ++i) {
            for (int j = i + 1; j < A.size(); ++j) {
                int a = A[i], b = A[j];
                int len = 2;
                while (set.find(a + b) != set.end()) {
                    int c = a + b;
                    a = b;
                    b = c;
                    ans = max(ans, ++len);
                }
            }
        }
        return ans > 2 ? ans : 0;
    }

    int lenLongestFibSubseqV2(vector<int>& A) {
        unordered_map<int, int> indexOfVal; // value to index map
        for (int i = 0; i < A.size(); ++i) indexOfVal[A[i]] = i;

        unordered_map<int, int> longest; // encoded (i, j) -> longest length
        int ans = 0;
        for (int k = 0; k < A.size(); ++k)
            for (int j = 0; j < k; ++j) {
                if (A[k] - A[j] < A[j] && indexOfVal.count(A[k] - A[j])) {
                    int i = indexOfVal[A[k] - A[j]];
                    int key = j * A.size() + k;
                    longest[key] = longest[i * A.size() + j] + 1;
                    ans = max(ans, longest[key] + 2);
                }
            }
        return ans > 2 ? ans : 0;
    }
};
// Test
struct Test {
    vector<int> input;
    int expected;
    void run() {
        Solution sol;
        cout << "Length of longest Fibonacci subsequence of [";
        for (int n: input) cout << n << ", ";
        int act = sol.lenLongestFibSubseqV2(input);
        cout << "] -> " << act << endl;
        assert(act == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {1,2,6},
            0
        },
        {
            {1,2,3,4,5,6,7,8},
            5
        },
        {
            {1,3,7,11,12,14,18},
            3
        },
    };
    for (auto& t: tests) t.run();
    return 0;
}