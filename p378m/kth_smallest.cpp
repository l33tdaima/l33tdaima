// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <utility>
#include <queue>
#include <iostream>

using namespace std;

class Solution {
    struct Tuple {
        int v;
        int i, j;
        bool operator<(Tuple rhs) const { return v > rhs.v; }
    };
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        priority_queue<Tuple> minHeap;
        for (int j = 0; j < n; ++j) {
            Tuple tuple = {matrix[0][j], 0, j};
            minHeap.push(tuple);
        }
        while (!minHeap.empty() && --k > 0) {
            int i = minHeap.top().i;
            int j = minHeap.top().j;
            minHeap.pop();
            if (i + 1 < n) {
                Tuple tuple = {matrix[i + 1][j], i + 1, j};
                minHeap.push(tuple);
            }
        }
        return minHeap.top().v;
    }
};
// TEST
struct Test {
    vector<vector<int>> matrix;
    int k;
    void run() {
        cout << "The " << k << "-th smallest element -> ";
        Solution sol;
        cout << sol.kthSmallest(matrix, k) << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {{1,  5,  9},
            {10, 11, 13},
            {12, 13, 15}},
            8
        },
        {
            {{1,  5,  9},
            {2, 11, 13},
            {8, 13, 15}},
            4
        },
    };
    for (auto &t: tests) {
        t.run();
    }
    return 0;
}
