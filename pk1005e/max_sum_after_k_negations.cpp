// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <functional>
#include <queue>
#include <iostream>

using namespace std;

class Solution {
public:
    int largestSumAfterKNegations(vector<int>& A, int K) {
        priority_queue<int, vector<int>, greater<int> > minheap;
        int sum = 0;
        for (int a: A) {
            minheap.push(a);
            sum += a;
        }
        for (int k = 1; k <= K; ++k) {
            int top = minheap.top();
            sum -= 2 * top;
            minheap.pop();
            minheap.push(-top);
        }
        return sum;
    }
};
// TEST
struct Test {
    vector<int> input;
    int K;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.largestSumAfterKNegations(input, K);
        cout << "Largest sum of array after " << K << " negations -> "
             << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {4,2,3}, 1, 5
        },
        {
            {3,-1,0,2}, 3, 6
        },
        {
            {2,-3,-1,5,-4}, 2, 13
        },
    };
    for (auto& t: tests) t.run();
    return 0;
}
