// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    bool validMountainArrayTwoPasses(vector<int>& A) {
        int max = -1, maxIdx = -1;
        for (int i = 0; i < A.size(); ++i) {
            if (A[i] > max) {
                max = A[i];
                maxIdx = i;
            }
        }
        if (maxIdx == 0 || maxIdx == A.size() - 1) return false;
        for (int i = maxIdx - 1; i >= 0; --i) {
            if (A[i] >= A[i + 1]) return false;
        }
        for (int i = maxIdx + 1; i < A.size(); ++i) {
            if (A[i-1] <= A[i]) return false;
        }
        return true;
    }
    bool validMountainArrayOnePass(vector<int>& A) {
        size_t i = 0;
        while (i + 1 < A.size() && A[i + 1] > A[i]) i++;
        if (i == 0 || i == A.size() - 1) return false;
        while (i + 1 < A.size() && A[i + 1] < A[i]) i++;
        return i == A.size() - 1;
    }
};
// TEST
struct Test {
    vector<int> input;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.validMountainArrayOnePass(input);
        cout << "Valid mountain array [";
        for (int n: input) cout << n << " ";
        cout << "]? -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {}, false
        },
        {
            {1}, false
        },
        {
            {2,1}, false
        },
        {
            {3,5,5}, false
        },
        {
            {0,3,2,1}, true
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
